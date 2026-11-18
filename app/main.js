// Malayalam Anywhere – tray app. Type Malayalam in ANY Windows program with a global on/off key.
const { app, Tray, Menu, Notification, nativeImage } = require('electron');
const fs = require('fs');
const path = require('path');
const { KeyEngine } = require('./engine.bundle.js');
const win = require('./winapi.js');

if (!app.requestSingleInstanceLock()) app.quit();

const KEYS = { 'Scroll Lock': 0x91, 'Pause/Break': 0x13, Home: 0x24, End: 0x23, Insert: 0x2d, 'Right Ctrl': 0xa3, F8: 0x77, F9: 0x78, F10: 0x79, F11: 0x7a, F12: 0x7b };
const LAYOUTS = { inscript: 'Inscript', gist: 'GIST', typewriter: 'Typewriter', panchari: 'Panchari', varityper: 'Varityper (phonetic)' };
const OUTPUTS = { unicode: 'Unicode fonts (Noto Sans Malayalam, Anjali, Manjari …)', ml: 'ML-TT fonts (ML-TT Ambili, ML-TT Revathi …)', fml: 'MLW-TT fonts (MLW-TT …)' };
const MODIFIER_OR_IGNORED = new Set([0x10, 0xa0, 0xa1, 0x11, 0xa2, 0xa3, 0x12, 0xa4, 0xa5, 0x14, 0x5b, 0x5c]);
const RESET_KEYS = new Set([0x08, 0x2e, 0x0d, 0x09, 0x1b, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28]);

const cfgFile = () => path.join(app.getPath('userData'), 'settings.json');
let cfg = { enabled: false, layout: 'inscript', output: 'unicode', toggleKey: 'Scroll Lock', nextLayoutKey: 'Pause/Break' };
try { cfg = { ...cfg, ...JSON.parse(fs.readFileSync(cfgFile(), 'utf8')) }; } catch { /* first run */ }
const save = () => { try { fs.mkdirSync(path.dirname(cfgFile()), { recursive: true }); fs.writeFileSync(cfgFile(), JSON.stringify(cfg, null, 2)); } catch { /* ignore */ } };

const engine = new KeyEngine();
const applyCfg = () => { engine.mode = cfg.layout; engine.output = cfg.output; engine.reset(); };
applyCfg();

let tray, iconOn, iconOff;
const swallowedUp = new Set();
let chain = Promise.resolve(); // keeps injected text in key order

function toast(msg) { try { new Notification({ title: 'Malayalam Anywhere', body: msg, silent: true }).show(); } catch { /* ignore */ } }

function refresh() {
  tray.setImage(cfg.enabled ? iconOn : iconOff);
  tray.setToolTip(`Malayalam Anywhere – ${cfg.enabled ? 'ON' : 'off'} · ${LAYOUTS[cfg.layout]} · ${cfg.toggleKey} to switch`);
  const radio = (table, field, after) => Object.entries(table).map(([id, label]) => ({ label, type: 'radio', checked: cfg[field] === id, click: () => { cfg[field] = id; save(); applyCfg(); refresh(); after?.(); } }));
  const keyMenu = (field) => Object.keys(KEYS).map((k) => ({ label: k, type: 'radio', checked: cfg[field] === k, click: () => { cfg[field] = k; save(); refresh(); } }));
  tray.setContextMenu(Menu.buildFromTemplate([
    { label: cfg.enabled ? 'Malayalam typing: ON  (click to turn off)' : 'Malayalam typing: OFF  (click to turn on)', click: () => toggle() },
    { type: 'separator' },
    { label: 'Keyboard layout', submenu: radio(LAYOUTS, 'layout') },
    { label: 'Font type (output)', submenu: radio(OUTPUTS, 'output') },
    { type: 'separator' },
    { label: `On/Off key: ${cfg.toggleKey}`, submenu: keyMenu('toggleKey') },
    { label: `Next-layout key: ${cfg.nextLayoutKey}`, submenu: keyMenu('nextLayoutKey') },
    { label: 'Start with Windows', type: 'checkbox', checked: app.getLoginItemSettings().openAtLogin, click: (i) => app.setLoginItemSettings({ openAtLogin: i.checked }) },
    { type: 'separator' },
    { label: 'Quit', click: () => app.quit() },
  ]));
}

function toggle() {
  cfg.enabled = !cfg.enabled; save(); engine.reset(); refresh();
  toast(cfg.enabled ? `മലയാളം ON – ${LAYOUTS[cfg.layout]}` : 'Malayalam OFF – normal English keys');
}
function nextLayout() {
  const ids = Object.keys(LAYOUTS);
  cfg.layout = ids[(ids.indexOf(cfg.layout) + 1) % ids.length]; save(); applyCfg(); refresh();
  toast(`Layout: ${LAYOUTS[cfg.layout]}`);
}

/** return true to swallow the key */
function onKey(vk, down) {
  if (!down) { if (swallowedUp.delete(vk)) return true; return false; }
  if (vk === KEYS[cfg.toggleKey]) { swallowedUp.add(vk); toggle(); return true; }
  if (vk === KEYS[cfg.nextLayoutKey]) { swallowedUp.add(vk); nextLayout(); return true; }
  if (!cfg.enabled) return false;
  if (MODIFIER_OR_IGNORED.has(vk)) return false;
  if (RESET_KEYS.has(vk) || win.isDown(0x11) || win.isDown(0x12) || win.isDown(0x5b) || win.isDown(0x5c)) { engine.reset(); return false; }
  let shift = win.isDown(0x10);
  if (vk >= 0x41 && vk <= 0x5a && win.capsOn()) shift = !shift; // Caps Lock flips letters, like a real layout
  const r = engine.key(vk, shift);
  if (!r.handled) return false;
  swallowedUp.add(vk);
  chain = chain.then(() => win.sendEdit(r.backspaces, r.text)).catch(console.error);
  return true;
}

app.whenReady().then(() => {
  iconOn = nativeImage.createFromPath(path.join(__dirname, 'icon-on.png'));
  iconOff = nativeImage.createFromPath(path.join(__dirname, 'icon-off.png'));
  tray = new Tray(cfg.enabled ? iconOn : iconOff);
  tray.on('click', () => toggle());
  refresh();
  win.installHooks({ onKey, onMouseDown: () => engine.reset() });
  let fg = win.foreground();
  setInterval(() => { const f = win.foreground(); if (f !== fg) { fg = f; engine.reset(); } }, 250); // new window = new word
  toast(`Running in the tray. ${cfg.toggleKey} turns Malayalam typing on/off.`);
});
app.on('window-all-closed', (e) => e.preventDefault()); // tray app: no windows
app.on('will-quit', () => win.removeHooks());
