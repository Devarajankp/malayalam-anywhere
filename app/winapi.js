// Thin Win32 layer (koffi = FFI): low-level keyboard/mouse hooks + SendInput. Windows only.
const koffi = require('koffi');

const user32 = koffi.load('user32.dll');
const kernel32 = koffi.load('kernel32.dll');

const KBDLL = koffi.struct('KBDLL', { vkCode: 'uint32', scanCode: 'uint32', flags: 'uint32', time: 'uint32', dwExtraInfo: 'uintptr' });
const KEYBD = koffi.struct('KEYBD', { wVk: 'uint16', wScan: 'uint16', dwFlags: 'uint32', time: 'uint32', dwExtraInfo: 'uintptr' });
// INPUT on 64-bit Windows is 40 bytes: type(4) + padding(4) + union (the largest member, MOUSEINPUT, is 32 bytes)
const INPUT = koffi.struct('INPUT', { type: 'uint32', ki: KEYBD, pad: koffi.array('uint8', 8) });

const HookProc = koffi.proto('intptr __stdcall HookProc(int nCode, uintptr wParam, void *lParam)');

const SetWindowsHookExW = user32.func('void *SetWindowsHookExW(int idHook, HookProc *lpfn, void *hmod, uint32 dwThreadId)');
const UnhookWindowsHookEx = user32.func('bool UnhookWindowsHookEx(void *hhk)');
const CallNextHookEx = user32.func('intptr CallNextHookEx(void *hhk, int nCode, uintptr wParam, void *lParam)');
const SendInputRaw = user32.func('uint32 SendInput(uint32 cInputs, INPUT *pInputs, int cbSize)');
const GetAsyncKeyState = user32.func('int16 GetAsyncKeyState(int vKey)');
const GetKeyState = user32.func('int16 GetKeyState(int nVirtKey)');
const GetForegroundWindow = user32.func('void *GetForegroundWindow()');
const GetModuleHandleW = kernel32.func('void *GetModuleHandleW(const char16_t *name)');

const WH_KEYBOARD_LL = 13, WH_MOUSE_LL = 14;
const KEYEVENTF_KEYUP = 2, KEYEVENTF_UNICODE = 4;
const LLKHF_INJECTED = 0x10;
const MARK = 0x4d4c5921; // "ML!" – tags the events we generate ourselves

const keep = []; // callbacks must stay referenced
let kbHook = null, mouseHook = null;

function installHooks({ onKey, onMouseDown }) {
  const hmod = GetModuleHandleW(null);
  const kbCb = koffi.register((nCode, wParam, lParam) => {
    if (nCode === 0) {
      const k = koffi.decode(lParam, KBDLL);
      const ours = (k.flags & LLKHF_INJECTED) !== 0 || k.dwExtraInfo === MARK;
      if (!ours) {
        const down = wParam === 0x100 || wParam === 0x104; // WM_KEYDOWN / WM_SYSKEYDOWN
        let swallow = false;
        try { swallow = onKey(k.vkCode, down); } catch (e) { console.error(e); }
        if (swallow) return 1;
      }
    }
    return CallNextHookEx(null, nCode, wParam, lParam);
  }, koffi.pointer(HookProc));
  const msCb = koffi.register((nCode, wParam, lParam) => {
    if (nCode === 0 && (wParam === 0x201 || wParam === 0x204 || wParam === 0x207)) {
      try { onMouseDown(); } catch (e) { console.error(e); }
    }
    return CallNextHookEx(null, nCode, wParam, lParam);
  }, koffi.pointer(HookProc));
  keep.push(kbCb, msCb);
  kbHook = SetWindowsHookExW(WH_KEYBOARD_LL, kbCb, hmod, 0);
  mouseHook = SetWindowsHookExW(WH_MOUSE_LL, msCb, hmod, 0);
  if (!kbHook) throw new Error('Could not install the keyboard hook');
}

function removeHooks() {
  if (kbHook) UnhookWindowsHookEx(kbHook);
  if (mouseHook) UnhookWindowsHookEx(mouseHook);
  kbHook = mouseHook = null;
}

const ev = (vk, scan, flags) => ({ type: 1, ki: { wVk: vk, wScan: scan, dwFlags: flags, time: 0, dwExtraInfo: MARK }, pad: new Array(8).fill(0) });

/** Press Backspace `n` times, then type `text` as Unicode characters (works in any app that accepts text). */
function sendEdit(n, text) {
  const list = [];
  for (let i = 0; i < n; i++) list.push(ev(0x08, 0, 0), ev(0x08, 0, KEYEVENTF_KEYUP));
  for (let i = 0; i < text.length; i++) {
    const u = text.charCodeAt(i); // UTF-16 units; surrogate pairs are sent as two units, which Windows accepts
    list.push(ev(0, u, KEYEVENTF_UNICODE), ev(0, u, KEYEVENTF_UNICODE | KEYEVENTF_KEYUP));
  }
  if (list.length) SendInputRaw(list.length, list, koffi.sizeof(INPUT));
}

const isDown = (vk) => (GetAsyncKeyState(vk) & 0x8000) !== 0;
const capsOn = () => (GetKeyState(0x14) & 1) === 1;
const foreground = () => { const h = GetForegroundWindow(); return h ? koffi.address(h) : 0n; };

module.exports = { installHooks, removeHooks, sendEdit, isDown, capsOn, foreground };
