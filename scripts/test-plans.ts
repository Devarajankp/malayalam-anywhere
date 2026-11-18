import { readFileSync } from 'fs';
import { KeyEngine, type Mode, type Output } from '../engine/core';
import { runToUnicode, canonicalizeUnicode } from '../engine/legacy';
import { normalizeMalayalamKeyboardInput } from '../engine/keyboardLayouts';
const plan = JSON.parse(readFileSync(process.argv[2], 'utf8')).plan;
let ok = 0, bad = 0;
for (const mode of Object.keys(plan) as Mode[]) for (const out of ['unicode', 'ml', 'fml'] as Output[]) {
  let m = 0, n = 0;
  for (const { word, seq } of plan[mode]) {
    const e = new KeyEngine(); e.mode = mode; e.output = out;
    let f: string[] = [];
    for (const s of seq) { const r = e.key(s.kc, s.shift); if (r.handled) f = f.slice(0, f.length - r.backspaces).concat(Array.from(r.text)); }
    const got = out === 'unicode' ? f.join('') : runToUnicode(f.join(''));
    const want = canonicalizeUnicode(normalizeMalayalamKeyboardInput(word));
    n++; if (got === want) m++; else { bad++; if (bad < 8) console.log('FAIL', mode, out, 'want', want, 'got', got); }
  }
  ok += m; console.log(mode.padEnd(11), out.padEnd(8), m + '/' + n);
}
process.exit(bad ? 1 : 0);
