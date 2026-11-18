import { KeyEngine, type Mode, type Output } from '../engine/core';
import { runToUnicode } from '../engine/legacy';

/** Play keys into a fake text field exactly like the Windows layer will. */
function type(mode: Mode, output: Output, keys: Array<[number, boolean]>): string {
  const e = new KeyEngine();
  e.mode = mode; e.output = output;
  let field: string[] = [];
  for (const [vk, sh] of keys) {
    const r = e.key(vk, sh);
    if (!r.handled) continue;
    field = field.slice(0, field.length - r.backspaces).concat(Array.from(r.text));
  }
  return field.join('');
}
const V = 86, D = 68, BR = 221;
let ok = 0, bad = 0;
const check = (name: string, got: string, want: string) => {
  if (got === want) ok++; else { bad++; console.log('FAIL', name, 'want', want, 'got', got); }
};
// the bug the user reported: Inscript V + D + ]  ->  single chillu ൻ (not ന്‍ / "ന്ർ")
check('inscript V D ]', type('inscript', 'unicode', [[V, false], [D, false], [BR, false]]), 'ൻ');
check('inscript shift+V', type('inscript', 'unicode', [[V, true]]), 'ൻ');
// the same keys into an ML-TT (Ambili) document produce legacy codes that read back as ൻ
const lg = type('inscript', 'ml', [[V, false], [D, false], [BR, false]]);
check('inscript V D ] -> ML codes read back', runToUnicode(lg), 'ൻ');
// typewriter prefix vowel: െ then ക -> കെ  (typewriter keys: see map)
console.log('legacy codes for ൻ:', JSON.stringify(lg));
console.log(ok, 'ok', bad, 'failed');
process.exit(bad ? 1 : 0);
