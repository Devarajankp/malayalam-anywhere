var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// engine/core.ts
var core_exports = {};
__export(core_exports, {
  KeyEngine: () => KeyEngine
});
module.exports = __toCommonJS(core_exports);

// engine/keyboardLayouts.ts
var INSCRIPT_MAP = {
  192: ["\u0D4A", "\u0D12"],
  49: ["1", "!"],
  50: ["2", "@"],
  51: ["3", "\u200B\u0D38\u0D4D\u0D31\u0D4D\u0D31"],
  52: ["4", "\u20A8"],
  53: ["5", "%"],
  54: ["6", "\u200B\u0D28\u0D4D\u0D31"],
  55: ["7", "\u0D15\u0D4D\u0D37"],
  56: ["8", "\u0D7E"],
  57: ["9", "("],
  48: ["0", ")"],
  189: ["-", "\u0D03"],
  187: ["\u0D43", "\u0D0B"],
  81: ["\u0D57", "\u0D14"],
  87: ["\u0D48", "\u0D10"],
  69: ["\u0D3E", "\u0D06"],
  82: ["\u0D40", "\u0D08"],
  84: ["\u0D42", "\u0D0A"],
  89: ["\u0D2C", "\u0D2D"],
  85: ["\u0D39", "\u0D19"],
  73: ["\u0D17", "\u0D18"],
  79: ["\u0D26", "\u0D27"],
  80: ["\u0D1C", "\u0D1D"],
  219: ["\u0D21", "\u0D22"],
  221: ["\u200D", "\u0D1E"],
  220: ["\u200C", "\u0D7C"],
  65: ["\u0D4B", "\u0D13"],
  83: ["\u0D47", "\u0D0F"],
  68: ["\u0D4D", "\u0D05"],
  70: ["\u0D3F", "\u0D07"],
  71: ["\u0D41", "\u0D09"],
  72: ["\u0D2A", "\u0D2B"],
  74: ["\u0D30", "\u0D31"],
  75: ["\u0D15", "\u0D16"],
  76: ["\u0D24", "\u0D25"],
  186: ["\u0D1A", "\u0D1B"],
  222: ["\u0D1F", "\u0D20"],
  90: ["\u0D46", "\u0D0E"],
  88: ["\u0D02", "\u0D7A"],
  67: ["\u0D2E", "\u0D23"],
  86: ["\u0D28", "\u0D7B"],
  66: ["\u0D35", "\u0D34"],
  78: ["\u0D32", "\u0D33"],
  77: ["\u0D38", "\u0D36"],
  188: [",", "\u0D37"],
  190: [".", "\u0D7D"],
  191: ["\u0D2F", "?"]
};
var GIST_MAP = {
  192: ["`", "~"],
  49: ["1", "!"],
  50: ["2", "@"],
  51: ["3", "\u20A8"],
  52: ["4", "/"],
  53: ["5", "("],
  54: ["6", ")"],
  55: ["7", "-"],
  56: ["8", "{"],
  57: ["9", "}"],
  48: ["0", ":"],
  189: ["?", ":"],
  187: ["\u0D18", "\u0D1D"],
  81: ["\u0D26", "\u0D27"],
  87: ["\u0D2A", "\u0D2B"],
  69: ["\u0D32", "\u0D7D"],
  82: ["\u0D31", "\u0D4D\u0D30"],
  84: ["\u0D35", "\u0D4D\u0D35"],
  89: ["\u0D2F", "\u0D4D\u0D2F"],
  85: ["\u0D46", "\u0D0E"],
  73: ["\u0D47", "\u0D34"],
  79: ["\u0D42", "\u0D57"],
  80: ["\u0D43", "\u0D12"],
  219: ["\u0D0F", "\u0D7A"],
  221: ["\u0D1B", "\u0D0B"],
  220: ["\u0D21", "\u0D22"],
  65: ["\u0D4D\u200C", "\u0D03"],
  83: ["\u0D2E", "\u0D02"],
  68: ["\u0D28", "\u0D7B"],
  70: ["\u0D15", "\u0D16"],
  71: ["\u0D24", "\u0D25"],
  72: ["\u0D4D", "\u0D31\u0D4D\u0D31"],
  74: ["\u0D30", "\u0D7C"],
  75: ["\u0D41", "\u0D09"],
  76: ["\u0D3E", "\u0D06"],
  186: ["\u0D3F", "\u0D40"],
  222: ["'", '"'],
  90: ["\u0D17", "\u0D19"],
  88: ["\u0D33", "\u0D7E"],
  67: ["\u0D38", "\u0D36"],
  86: ["\u0D1A", "\u0D05"],
  66: ["\u0D1C", "\u0D1E"],
  78: ["\u0D23", "\u0D07"],
  77: ["\u0D1F", "\u0D20"],
  188: ["\u0D37", "\u0D39"],
  190: ["\u0D2D", "\u0D2C"],
  191: [".", ","]
};
var TYPEWRITER_MAP = {
  192: ["\u0D4D", "\u0D02"],
  49: ["1", "\u0D1D"],
  50: ["2", "\u0D06"],
  51: ["3", "\u0D08"],
  52: ["4", "\u0D0A"],
  53: ["5", "\u0D0F"],
  54: ["6", "\u0D10"],
  55: ["7", "\u0D13"],
  56: ["8", "\u0D14"],
  57: ["9", "("],
  48: ["0", ")"],
  189: ["-", "\u0D03"],
  187: ["=", "+"],
  81: ["\u0D34", "\u0D12"],
  87: ["\u0D1C", "\u0D0B"],
  69: ["\u0D2A", "\u0D2B"],
  82: ["\u0D28", "\u0D7B"],
  84: ["\u0D0E", "\u0D07"],
  89: ["\u0D31", "\u0D4D\u0D30"],
  85: ["\u0D2F", "\u0D4D\u0D2F"],
  73: ["\u0D35", "\u0D4D\u0D35"],
  79: ["\u0D42", "\u0D57"],
  80: ["\u0D26", "\u0D27"],
  219: [",", "\u0D43"],
  221: ["\u0D15\u0D4D\u0D15", "\u0D1F\u0D4D\u0D1F"],
  220: ["\u0D4D", ""],
  65: ["\u0D2E", "\u0D20"],
  83: ["\u0D46", "\u0D47"],
  68: ["\u0D15", "\u0D16"],
  70: ["\u0D24", "\u0D25"],
  71: ["\u0D30", "\u0D7C"],
  72: ["\u0D32", "\u0D7D"],
  74: ["\u0D3F", "\u0D40"],
  75: ["\u0D41", "\u0D09"],
  76: ["\u0D3E", "\u0D05"],
  186: [".", "\u0D06"],
  222: ["\u0D28\u0D4D\u0D28", ":"],
  90: ["\u0D17", "\u0D18"],
  88: ["\u0D33", "\u0D7E"],
  67: ["\u0D38", "\u0D36"],
  86: ["\u0D1A", "\u0D1B"],
  66: ["\u0D19", "\u0D1E"],
  78: ["\u0D23", "\u0D7A"],
  77: ["\u0D1F", "\u0D31\u0D4D\u0D31"],
  188: ["\u0D37", "\u0D39"],
  190: ["\u0D2D", "\u0D2C"],
  191: ["\u0D21", "\u0D22"]
};
var PANCHARI_MAP = {
  192: ["\u0D1C", "\u0D19"],
  49: ["\u0D21", "1"],
  50: ["\u0D1F", "2"],
  51: ["\u0D16", "3"],
  52: ["\u0D27", "4"],
  53: ["\u0D1B", "5"],
  54: ["\u0D2D", "6"],
  55: ["\u0D25", "7"],
  56: ["\u0D18", "8"],
  57: ["\u0D20", "9"],
  48: ["\u0D22", "0"],
  189: ["-", "("],
  187: ["\u0D2B", ")"],
  81: ["\u0D37", "\u0D15\u0D4D\u0D37"],
  87: ["\u0D15", ":"],
  69: ["\u0D3E", "\u0D06"],
  82: ["\u0D35", "\u0D4D\u0D35"],
  84: ["\u0D30", "\u0D4D\u0D30"],
  89: ["\u0D24", ";"],
  85: ["\u0D2F", "\u0D4D\u0D2F"],
  73: ["\u0D32", "\u0D7D"],
  79: ["\u0D3F", "\u0D07"],
  80: ["", "\u0D09"],
  219: ["\u0D12", "\u0D1D"],
  221: ["\u0D41", "\u0D42"],
  220: ["\u0D43", "/"],
  65: ["\u0D05", "\u0D03"],
  83: ["\u0D38", "'"],
  68: ["\u0D26", '"'],
  70: ["\u0D28", "\u0D7B"],
  71: ["\u0D23", "\u0D7A"],
  72: ["\u0D2E", "\u0D47"],
  74: ["\u0D17", "\u0D02"],
  75: ["\u0D0F", ","],
  76: ["\u0D40", "\u0D57"],
  186: ["\u0D10", "\u0D03"],
  222: ["!", "\u0D0B"],
  90: ["\u0D39", "\u0D7E"],
  88: ["\u0D31", "\u0D7C"],
  67: ["\u0D1E", "\u0D14"],
  86: ["\u0D1A", "\u0D13"],
  66: ["\u0D2C", "="],
  78: ["\u0D2A", "%"],
  77: ["\u0D0E", "?"],
  188: ["\u0D4D", "."],
  190: ["\u0D33", "\u0D34"],
  191: ["\u0D36", "\u0D46"]
};
var VARITYPER_MAP = {
  192: ["\u0D2B", "\u0D19"],
  49: ["\u0D4D\u200C\u0D35", "\u0D31\u0D4D\u0D31"],
  50: ["\u0D43", "\u0D36\u0D4D\u0D36"],
  51: ["\u0D19\u0D4D\u0D15", "\u0D17\u0D4D\u0D17"],
  52: ["\u0D2E\u0D4D\u0D2A", "\u0D10"],
  53: ["\u0D2E\u0D4D\u0D2E", "\u0D1E\u0D4D\u0D1A"],
  54: ["\u0D16", "\u0D18"],
  55: ["\u0D1E", "\u0D48"],
  56: ["\u0D21", "\u0D03"],
  57: ["\u0D7A", "\u0D22"],
  48: ["\u0D57", "\u0D24\u0D4D\u0D38"],
  189: ["\u0D4B", "\u0D13"],
  187: ["\u0D0F", "\u0D1B"],
  81: ["\u0D15\u0D4D\u0D15", "\u0D12"],
  87: ["\u0D28\u0D4D\u0D28", "\u0D32\u0D4D\u0D32"],
  69: ["\u0D47", "\u0D37"],
  82: ["\u0D02", "\u0D17"],
  84: ["\u0D28", "\u0D07"],
  89: ["\u0D2A", "\u0D0E"],
  85: ["\u0D2E", "\u0D27"],
  73: ["\u0D38", "\u0D2D"],
  79: ["\u0D31", "\u0D1C"],
  80: ["\u0D03", "\u0D4A"],
  219: ["?", "\u0D14"],
  221: [" ", "\u0D08"],
  220: ["\u0D43", "\u0D34"],
  65: ["\u0D23\u0D4D\u0D23", "\u0D20"],
  83: ["\u0D35", "\u0D7E"],
  68: ["\u0D24", "\u0D2A\u0D4D\u0D2A"],
  70: ["\u0D2F", "\u0D23\u0D4D\u0D1F"],
  71: ["\u0D46", "\u0D36"],
  72: ["\u0D3E", "\u0D1F\u0D4D\u0D1F"],
  74: ["\u0D41", "\u0D26"],
  75: ["\u0D3F", "\u0D4D\u0D30"],
  76: ["\u0D15", "\u0D40"],
  186: ["\u0D4D\u200C", "\u0D19\u0D4D\u0D19"],
  222: ["\u0D30", "\u0D42"],
  90: ["\u0D7C", "\u0D09"],
  88: ["\u0D05", "\u0D2C"],
  67: ["\u0D7D", "\u0D25"],
  86: ["\u0D1A", "\u0D28\u0D4D\u0D24"],
  66: ["\u0D24\u0D4D\u0D24", "\u0D39"],
  78: ["\u0D33", "\u0D4D\u0D2F"],
  77: ["\u0D32", "\u0D06"],
  188: ["\u0D7B", ","],
  190: ["\u0D23", "."],
  191: ["\u0D4D", "\u0D1E\u0D4D\u0D1E"]
};
function getLayoutMap(mode) {
  switch (mode) {
    case "inscript":
      return INSCRIPT_MAP;
    case "gist":
      return GIST_MAP;
    case "typewriter":
      return TYPEWRITER_MAP;
    case "panchari":
      return PANCHARI_MAP;
    case "varityper":
      return VARITYPER_MAP;
    default:
      return null;
  }
}
function normalizeMalayalamKeyboardInput(text) {
  let out = text;
  out = out.replace(/ഒാ/g, "\u0D13").replace(/ഒൗ/g, "\u0D14").replace(/ഇൗ/g, "\u0D08").replace(/ഉൗ/g, "\u0D0A").replace(/എെ/g, "\u0D10").replace(/െെ/g, "\u0D48").replace(/ൊ/g, "\u0D4A").replace(/ോ/g, "\u0D4B").replace(/ൌ/g, "\u0D4C");
  out = out.replace(/\u200B([െേൈ])([ക-ഹളഴറ])/g, "$2$1").replace(/([\u0D15-\u0D27\u0D29-\u0D30\u0D32-\u0D39])([െേൈ])്റ/g, "$1\u0D4D\u0D30$2").replace(/([ക-ഹളഴറ])([െേൈ])്വ/g, "$1\u0D4D\u0D35$2").replace(/([ക-ഹളഴറ])([െേൈ])്യ/g, "$1\u0D4D\u0D2F$2").replace(/([ക-ഹളഴറ])([െേൈ])((?:്[ക-ഹളഴറ])+)/g, "$1$3$2");
  out = out.replace(/ൻറ/g, "\u0D28\u0D4D\u0D31").replace(/ന്പ/g, "\u0D2E\u0D4D\u0D2A").replace(/ന്െറ/g, "\u0D28\u0D4D\u0D31\u0D46").replace(/ൻറേ/g, "\u0D28\u0D4D\u0D31\u0D47").replace(/െന്റെ/g, "\u0D28\u0D4D\u0D31\u0D48").replace(/ണ്‍/g, "\u0D7A").replace(/ന്‍/g, "\u0D7B").replace(/ര്‍/g, "\u0D7C").replace(/ല്‍/g, "\u0D7D").replace(/ള്‍/g, "\u0D7E");
  return out;
}
function correctNewChillu(text) {
  return text.replaceAll("\u0D23\u0D4D\u200D", "\u0D7A").replaceAll("\u0D28\u0D4D\u200D", "\u0D7B").replaceAll("\u0D30\u0D4D\u200D", "\u0D7C").replaceAll("\u0D32\u0D4D\u200D", "\u0D7D").replaceAll("\u0D33\u0D4D\u200D", "\u0D7E").replaceAll("\u0D47\u0D3E", "\u0D4B").replaceAll("\u0D46\u0D3E", "\u0D4A").replaceAll("\u0D66", "0").replaceAll("\u0D67", "1").replaceAll("\u0D68", "2").replaceAll("\u0D69", "3").replaceAll("\u0D6A", "4").replaceAll("\u0D6B", "5").replaceAll("\u0D6C", "6").replaceAll("\u0D6D", "7").replaceAll("\u0D6E", "8").replaceAll("\u0D6F", "9");
}

// engine/malayalamConverters.ts
function Unicode_FML(l) {
  return l === "\u0D02" ? "w+=+" : l === "\u0D20\u0D03" ? "x+=+" : l === "\u0D05" ? "A+=+" : l === "\u0D06" ? "B+=+" : l === "\u0D07" ? "C+=+" : l === "\u0D08" ? "Cu+=+" : l === "\u0D09" ? "D+=+" : l === "\u0D0A" ? "Du+=+" : l === "\u0D0B" ? "E+=+" : l === "\u0D0C" ? "f+=+" : l === "\u0D0E" ? "F+=+" : l === "\u0D0F" ? "G+=+" : l === "\u0D10" ? "sF+=+" : l === "\u0D12" ? "H+=+" : l === "\u0D13" ? "Hm+=+" : l === "\u0D14" ? "Hu+=+" : l === "\u0D15" ? "I+=+" : l === "\u0D16" ? "J+=+" : l === "\u0D17" ? "K+=+" : l === "\u0D18" ? "L+=+" : l === "\u0D19" ? "M+=+" : l === "\u0D1A" ? "N+=+" : l === "\u0D1B" ? "O+=+" : l === "\u0D1C" ? "P+=+" : l === "\u0D1D" ? "Q+=+" : l === "\u0D1E" ? "R+=+" : l === "\u0D1F" ? "S+=+" : l === "\u0D20" ? "T+=+" : l === "\u0D21" ? "U+=+" : l === "\u0D22" ? "V+=+" : l === "\u0D23" ? "W+=+" : l === "\u0D24" ? "X+=+" : l === "\u0D25" ? "Y+=+" : l === "\u0D26" ? "Z+=+" : l === "\u0D27" ? "[+=+" : l === "\u0D28" ? "\\+=+" : l === "\u0D2A" ? "]+=+" : l === "\u0D2B" ? "^+=+" : l === "\u0D2C" ? "_+=+" : l === "\u0D2D" ? "`+=+" : l === "\u0D2E" ? "a+=+" : l === "\u0D2F" ? "b+=+" : l === "\u0D30" ? "c+=+" : l === "\u0D31" ? "d+=+" : l === "\u0D32" ? "e+=+" : l === "\u0D33" ? "f+=+" : l === "\u0D34" ? "g+=+" : l === "\u0D35" ? "h+=+" : l === "\u0D36" ? "i+=+" : l === "\u0D37" ? "j+=+" : l === "\u0D38" ? "k" : l === "\u0D39" ? "l+=+" : l === "\u0D3E" ? "m+=+" : l === "\u0D3F" ? "n+=+" : l === "\u0D40" ? "o+=+" : l === "\u0D41" ? "p+=+" : l === "\u0D42" ? "q+=+" : l === "\u0D43" || l === "\u0D44" ? "r+=+" : l === "\u0D46" ? "s" : l === "\u0D47" ? "t" : l === "\u0D48" ? "!!ss!!" : l === "\u0D4A" ? "sm" : l === "\u0D4B" ? "tm" : l === "\u0D4C" ? "su" : l === "\u0D4D" ? "v" : l === "\u0D57" ? "u+=+" : l === "\u0D7A" ? "\xAC+=+" : l === "\u0D7B" ? "\xB3+=+" : l === "\u0D7C" ? "\xC0+=+" : l === "\u0D7D" ? "\xC2+=+" : l === "\u0D7E" ? "\xC4+=+" : l.charCodeAt(0) === 8204 ? "" : "!^_^!" + l + "!^_^!";
}
function MLRendering1(l, e) {
  l = l.replaceAll("I+=+vI", "\xA1").replaceAll("I+=+ve", "\xA2").replaceAll("I+=+vj", "\xA3").replaceAll("K+=+vK", "\xA4").replaceAll("K+=+ve", "\xA5").replaceAll("M+=+vI", "\xA6").replaceAll("M+=+vM", "\xA7").replaceAll("N+=+vN", "\xA8").replaceAll("R+=+vN", "\xA9").replaceAll("R+=+vR", "\xAA").replaceAll("S+=+vS", "\xAB");
  if (e === 1) {
    l = l.replaceAll("W+=+vS", "\xAD");
  } else if (e === 0) {
    l = l.replaceAll("W+=+vS", "\xEF");
  }
  return l.replaceAll("W+=+vW", "\xAE").replaceAll("X+=+vX", "\xAF").replaceAll("X+=+vY", "\xB0").replaceAll("Z+=+vZ", "\xB1").replaceAll("Z+=+v[", "\xB2").replaceAll("\\+=+vX", "\xB4").replaceAll("\\+=+vZ", "\xB5").replaceAll("\\+=+v\\", "\xB6").replaceAll("\\+=+va", "\xB7").replaceAll("]+=v]", "\xB8").replaceAll("]+=ve", "\xB9").replaceAll("_+=+v_", "\xBA").replaceAll("_+=+ve", "\xBB").replaceAll("a+=+v]", "\xBC").replaceAll("a+=+va", "\xBD").replaceAll("a+=+ve", "\xBE").replaceAll("b+=+vb", "\xBF").replaceAll("d+=+vd", "\xC1").replaceAll("e+=+ve", "\xC3").replaceAll("f+=+vf", "\xC5").replaceAll("h+=+vh", "\xC6").replaceAll("i+=+ve", "\xC7").replaceAll("i+=+vi", "\xC8").replaceAll("k+=+ve", "\xC9").replaceAll("k+=+vk", "\xCA").replaceAll("l+=+ve", "\xCB").replaceAll("k+=+v\xE4", "\xCC").replaceAll("U+=+vU", "\xCD").replaceAll("I+=+vS", "\xCE").replaceAll("_+=+v[", "\xCF").replaceAll("_+=+vZ", "\xD0").replaceAll("N+=+vO", "\xD1").replaceAll("l+=+va", "\xD2").replaceAll("l+=+v\\", "\xD3").replaceAll("\\+=+v[", "\xD4").replaceAll("X+=+vk", "\xD5").replaceAll("P+=+vP", "\xD6").replaceAll("W+=+va", "\xD7").replaceAll("k+=+vY", "\xD8").replaceAll("\\+=+vY", "\xD9").replaceAll("P+=+vR", "\xDA").replaceAll("X+=+v`", "\xDB").replaceAll("K+=+va", "\xDC").replaceAll("i+=+vN", "\xDD").replaceAll("W+=+v[", "\xDE").replaceAll("X+=+va", "\xDF").replaceAll("I+=+vX", "\xE0").replaceAll("K+=+v\\", "\xE1").replaceAll("\xB3+=+vd", "\xE2").replaceAll("j+=+vS", "\xE3").replaceAll("d+=+vd", "\xE4").replaceAll("e+=+v]", "ev]").replaceAll("kvk", "\xCA");
}
function MLRendering2(l) {
  return l.replaceAll("vb", "y").replaceAll("vh", "z");
}
function MLRendering3(l) {
  for (; ; ) {
    const e = l.indexOf("+=+t");
    if (e < 1) break;
    const r = l.substring(0, e - 1);
    const c = l.substring(e + 4);
    l = r + "-t" + l.substring(e - 1, e) + c;
  }
  return l;
}
function MLRendering4(l) {
  for (; ; ) {
    const e = l.indexOf("+=+s");
    if (e < 1) break;
    const r = l.substring(0, e - 1);
    const c = l.substring(e + 4);
    l = r + "-s" + l.substring(e - 1, e) + c;
  }
  return l;
}
var VC_CHARS = [
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "a",
  "b",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "\xA1",
  "\xA2",
  "\xA3",
  "\xA4",
  "\xA5",
  "\xA6",
  "\xA7",
  "\xA8",
  "\xA9",
  "\xAA",
  "\xAB",
  "\xAC",
  "\xAD",
  "\xAE",
  "\xAF",
  "\xB0",
  "\xB1",
  "\xB2",
  "\xB3",
  "\xB4",
  "\xB5",
  "\xB6",
  "\xB7",
  "\xB8",
  "\xB9",
  "\xBA",
  "\xBB",
  "\xBC",
  "\xBD",
  "\xBE",
  "\xBF",
  "\xC0",
  "\xC1",
  "\xC2",
  "\xC3",
  "\xC4",
  "\xC5",
  "\xC6",
  "\xC7",
  "\xC8",
  "\xC9",
  "\xCA",
  "\xCB",
  "\xCC",
  "\xCD",
  "\xCE",
  "\xCF",
  "\xD0",
  "\xD1",
  "\xD2",
  "\xD3",
  "\xD4",
  "\xD5",
  "\xD6",
  "\xD7",
  "\xD8",
  "\xD9",
  "\xDA",
  "\xDB",
  "\xDC",
  "\xDD",
  "\xDE",
  "\xDF",
  "\xE0",
  "\xE1",
  "\xE3",
  "\xE5"
];
function MLRendering5(l) {
  for (const ch of VC_CHARS) {
    l = l.replaceAll(`${ch}+=+vc`, `{${ch}`);
  }
  return l;
}
function MLRendering6(l) {
  return l.replaceAll("+=+m", "m").replaceAll("+=+w", "w").replaceAll("\xC1", "\xE4").replaceAll("+=+n", "n").replaceAll("+=+o", "o").replaceAll("+=+p", "p").replaceAll("+=+q", "q").replaceAll("+=+r", "r").replaceAll("+=+y", "y").replaceAll("+=+v", "v").replaceAll("\\v-sd", "s\xE2").replaceAll("\\vd", "\xE2").replaceAll("tu", "ut").replaceAll("su", "us");
}
function MLRendering7(l) {
  for (; ; ) {
    const e = l.indexOf("v-sc");
    if (e < 1) break;
    l = l.substring(0, e - 1) + "-s{" + l.substring(e - 1, e) + l.substring(e + 4);
  }
  return l;
}
function MLRendering8(l) {
  for (; ; ) {
    const e = l.indexOf("v-tc");
    if (e < 1) break;
    l = l.substring(0, e - 1) + "-t{" + l.substring(e - 1, e) + l.substring(e + 4);
  }
  return l;
}
function MLRendering9(l) {
  for (; ; ) {
    const e = l.indexOf("+=+-tz");
    if (e < 1) break;
    l = l.substring(0, e - 1) + "-t" + l.substring(e - 1, e) + "z" + l.substring(e + 6);
  }
  return l;
}
function MLRendering10(l) {
  for (; ; ) {
    const e = l.indexOf("+=+-sz");
    if (e < 1) break;
    l = l.substring(0, e - 1) + "-s" + l.substring(e - 1, e) + "z" + l.substring(e + 6);
  }
  return l;
}
function MLRendering11(l) {
  for (; ; ) {
    const e = l.indexOf("+=+-sy");
    if (e < 1) break;
    l = l.substring(0, e - 1) + "-s" + l.substring(e - 1, e) + "y" + l.substring(e + 6);
  }
  return l;
}
function MLRendering12(l) {
  for (; ; ) {
    const e = l.indexOf("+=+-ty");
    if (e < 1) break;
    l = l.substring(0, e - 1) + "-t" + l.substring(e - 1, e) + "y" + l.substring(e + 6);
  }
  return l;
}
function MLRendering13(l) {
  for (; ; ) {
    const e = l.indexOf("+=+!!ss!!");
    if (e < 1) break;
    l = l.substring(0, e - 1) + "-ss" + l.substring(e - 1, e) + l.substring(e + 9);
  }
  return l;
}
function MLRendering14(l) {
  for (; ; ) {
    const e = l.indexOf("{-ss");
    if (e < 1) break;
    const r = l.substring(0, e - 1);
    l = r + "!-ss{" + l.substring(e + 4);
  }
  return l;
}
function correctEnglish(l) {
  return l.replaceAll("kt", "tk").replaceAll("ks", "sk").replaceAll("^ve", "^vf").replaceAll("+=+", "-").replaceAll("!^_^!", "").replaceAll("^_^", "").replaceAll("kvc", "{k").replaceAll("k!!ss!!", "ssk").replaceAll("{!!ss!!", "ss{").replaceAll("{ss", "ss{");
}
function unicodeToMlFml(input, mode) {
  const normalized = correctNewChillu(input);
  let c = "";
  for (let a = 0; a < normalized.length; a++) {
    c += Unicode_FML(normalized.substring(a, a + 1));
  }
  c = MLRendering1(c, mode);
  c = MLRendering2(c);
  c = MLRendering3(c);
  c = MLRendering4(c);
  c = MLRendering5(c);
  c = MLRendering6(c);
  c = MLRendering7(c);
  c = MLRendering8(c);
  c = MLRendering9(c);
  c = MLRendering10(c);
  c = MLRendering11(c);
  c = MLRendering12(c);
  c = MLRendering13(c);
  c = MLRendering14(c);
  return correctEnglish(c);
}

// engine/legacy.ts
function canonicalizeUnicode(s) {
  return s.replace(/ൊ/g, "\u0D4A").replace(/ോ/g, "\u0D4B").replace(/ൌ/g, "\u0D4C").replace(/െെ/g, "\u0D48").replace(/ഒാ/g, "\u0D13").replace(/ഒൗ/g, "\u0D14").replace(/ഇൗ/g, "\u0D08").replace(/ഉൗ/g, "\u0D0A").replace(/എെ/g, "\u0D10");
}
var C = "[\\u0D15-\\u0D3A]";
var FIX_SIGN_VIRAMA = new RegExp(`(${C})([\\u0D46\\u0D47\\u0D48])((?:\\u0D4D${C})+)`, "g");
var FIX_DOUBLE_SIGN = new RegExp(`([\\u0D46\\u0D47\\u0D48])([\\u0D46\\u0D47\\u0D48])(${C}(?:\\u0D4D${C})*)`, "g");
function unicodeToLegacy(s, series) {
  return unicodeToMlFml(canonicalizeUnicode(s), series === "fml" ? 0 : 1);
}

// engine/core.ts
var ZWSP = /​/g;
var PASS = { handled: false, backspaces: 0, text: "" };
var KeyEngine = class {
  mode = "inscript";
  output = "unicode";
  /** Unicode of the word being typed (may contain ZWSP markers used for vowel-sign reordering) */
  uni = "";
  /** exactly what we have put on screen for that word */
  shown = "";
  /** forget the current word (call on space, enter, mouse click, focus change, cursor keys …) */
  reset() {
    this.uni = "";
    this.shown = "";
  }
  render(u) {
    const clean = u.replace(ZWSP, "");
    return this.output === "unicode" ? clean : unicodeToLegacy(clean, this.output);
  }
  /** @param vk Windows virtual-key code (same numbers as browser keyCode for letters/punctuation) */
  key(vk, shift) {
    const def = getLayoutMap(this.mode)?.[vk];
    if (!def) {
      this.reset();
      return PASS;
    }
    let ch = shift ? def[1] : def[0];
    if (!ch) {
      this.reset();
      return PASS;
    }
    if (this.mode === "typewriter" && /^[െേൈ]$/.test(ch)) {
      const last = this.uni.replace(ZWSP, "").slice(-1);
      if (!(ch === "\u0D46" && last === "\u0D46")) ch = "\u200B" + ch;
    }
    const nextUni = canonicalizeUnicode(normalizeMalayalamKeyboardInput(this.uni + ch));
    const nextShown = this.render(nextUni);
    let common = 0;
    const a = Array.from(this.shown);
    const b = Array.from(nextShown);
    while (common < a.length && common < b.length && a[common] === b[common]) common++;
    const res = { handled: true, backspaces: a.length - common, text: b.slice(common).join("") };
    this.uni = nextUni;
    this.shown = nextShown;
    return res;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  KeyEngine
});
