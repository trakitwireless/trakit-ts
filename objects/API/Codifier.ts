import { IS_STRING } from "./Functions";

/**
 * A mapping for non-accented lower-case characters.
 **/
const DIACRITICS = {
	'\u2c65': "a", '\u00e0': "a", '\u00e1': "a", '\u00e2': "a", '\u00e3': "a",
	'\u00e4': "a", '\u00e5': "a", '\u0101': "a", '\u0103': "a", '\u0105': "a",
	'\u01ce': "a", '\u01df': "a", '\u01e1': "a", '\u01fb': "a", '\u0201': "a",
	'\u0203': "a", '\u0227': "a", '\u0250': "a", '\uff41': "a", '\u1e01': "a",
	'\u1e9a': "a", '\u1ea1': "a", '\u1ea3': "a", '\u1ea5': "a", '\u1ea7': "a",
	'\u1ea9': "a", '\u1eab': "a", '\u1ead': "a", '\u1eaf': "a", '\u1eb1': "a",
	'\u1eb3': "a", '\u1eb5': "a", '\u1eb7': "a", '\u24d0': "a", '\ua733': "aa",
	'\u00e6': "ae", '\u01e3': "ae", '\u01fd': "ae", '\ua735': "ao", '\ua737': "au",
	'\ua739': "av", '\ua73b': "av", '\ua73d': "ay",
	'\u0180': "b", '\u0183': "b", '\u0253': "b", '\uff42': "b", '\u1e03': "b",
	'\u1e05': "b", '\u1e07': "b", '\u24d1': "b",
	'\u00e7': "c", '\u0107': "c", '\u0109': "c", '\u010b': "c", '\u010d': "c",
	'\u0188': "c", '\ua73f': "c", '\u023c': "c", '\uff43': "c", '\u1e09': "c",
	'\u2184': "c", '\u24d2': "c",
	'\u010f': "d", '\u0111': "d", '\u018c': "d", '\ua77a': "d", '\u0256': "d",
	'\u0257': "d", '\uff44': "d", '\u1e0b': "d", '\u1e0d': "d", '\u1e0f': "d",
	'\u1e11': "d", '\u1e13': "d", '\u24d3': "d", '\u00f0': "d", '\u01c6': "dz",
	'\u01f3': "dz",
	'\u00e8': "e", '\u00e9': "e", '\u00ea': "e", '\u00eb': "e", '\u0113': "e",
	'\u0115': "e", '\u0117': "e", '\u0119': "e", '\u011b': "e", '\u01dd': "e",
	'\u0205': "e", '\u0207': "e", '\u0229': "e", '\u0247': "e", '\u025b': "e",
	'\uff45': "e", '\u1e15': "e", '\u1e17': "e", '\u1e19': "e", '\u1e1b': "e",
	'\u1e1d': "e", '\u1eb9': "e", '\u1ebb': "e", '\u1ebd': "e", '\u1ebf': "e",
	'\u1ec1': "e", '\u1ec3': "e", '\u1ec5': "e", '\u1ec7': "e", '\u24d4': "e",
	'\u0192': "f", '\ua77c': "f", '\uff46': "f", '\u1e1f': "f", '\u24d5': "f",
	'\u011d': "g", '\u011f': "g", '\u0121': "g", '\u0123': "g", '\ua77f': "g",
	'\ua7a1': "g", '\u01e5': "g", '\u01e7': "g", '\u01f5': "g", '\u0260': "g",
	'\uff47': "g", '\u1d79': "g", '\u1e21': "g", '\u24d6': "g",
	'\u2c68': "h", '\u2c76': "h", '\u0125': "h", '\u0127': "h", '\u021f': "h",
	'\u0265': "h", '\uff48': "h", '\u1e23': "h", '\u1e25': "h", '\u1e27': "h",
	'\u1e29': "h", '\u1e2b': "h", '\u1e96': "h", '\u24d7': "h", '\u0195': "hv",
	'\u00ec': "i", '\u00ed': "i", '\u00ee': "i", '\u00ef': "i", '\u0129': "i",
	'\u012b': "i", '\u012d': "i", '\u012f': "i", '\u0131': "i", '\u01d0': "i",
	'\u0209': "i", '\u020b': "i", '\u0268': "i", '\uff49': "i", '\u1e2d': "i",
	'\u1e2f': "i", '\u0307': "i", '\u1ec9': "i", '\u1ecb': "i", '\u24d8': "i",
	'\u0069': "i", '\u0133': "ij",
	'\u0135': "j", '\u01f0': "j", '\u0249': "j", '\uff4a': "j", '\u24d9': "j",
	'\u2c6a': "k", '\u0137': "k", '\u0199': "k", '\ua741': "k", '\ua743': "k",
	'\ua745': "k", '\ua7a3': "k", '\u01e9': "k", '\uff4b': "k", '\u1e31': "k",
	'\u1e33': "k", '\u1e35': "k", '\u24da': "k", '\u0138': "k",
	'\u2c61': "l", '\u013a': "l", '\u013c': "l", '\u013e': "l", '\u0140': "l",
	'\u0142': "l", '\u017f': "l", '\u019a': "l", '\ua747': "l", '\ua749': "l",
	'\ua781': "l", '\u026b': "l", '\uff4c': "l", '\u1e37': "l", '\u1e39': "l",
	'\u1e3b': "l", '\u1e3d': "l", '\u24db': "l", '\u01c9': "lj",
	'\u026f': "m", '\u0271': "m", '\uff4d': "m", '\u1e3f': "m", '\u1e41': "m",
	'\u1e43': "m", '\u24dc': "m",
	'\u00f1': "n", '\u0144': "n", '\u0146': "n", '\u0148': "n", '\u0149': "n",
	'\u019e': "n", '\ua791': "n", '\ua7a5': "n", '\u01f9': "n", '\u0272': "n",
	'\uff4e': "n", '\u1e45': "n", '\u1e47': "n", '\u1e49': "n", '\u1e4b': "n",
	'\u24dd': "n", '\u014b': "n", '\u01cc': "nj",
	'\u00f2': "o", '\u00f3': "o", '\u00f4': "o", '\u00f5': "o", '\u00f6': "o",
	'\u00f8': "o", '\u014d': "o", '\u014f': "o", '\u0151': "o", '\u01a1': "o",
	'\ua74b': "o", '\ua74d': "o", '\u01d2': "o", '\u01eb': "o", '\u01ed': "o",
	'\u01ff': "o", '\u020d': "o", '\u020f': "o", '\u022b': "o", '\u022d': "o",
	'\u022f': "o", '\u0231': "o", '\u0254': "o", '\u0275': "o", '\uff4f': "o",
	'\u1e4d': "o", '\u1e4f': "o", '\u1e51': "o", '\u1e53': "o", '\u1ecd': "o",
	'\u1ecf': "o", '\u1ed1': "o", '\u1ed3': "o", '\u1ed5': "o", '\u1ed7': "o",
	'\u1ed9': "o", '\u1edb': "o", '\u1edd': "o", '\u1edf': "o", '\u1ee1': "o",
	'\u1ee3': "o", '\u24de': "o", '\u008c': "oe", '\u009c': "oe", '\u0153': "oe",
	'\u01a3': "oi", '\ua74f': "oo", '\u0223': "ou",
	'\u01a5': "p", '\ua751': "p", '\ua753': "p", '\ua755': "p", '\uff50': "p",
	'\u1d7d': "p", '\u1e55': "p", '\u1e57': "p", '\u24df': "p",
	'\ua757': "q", '\ua759': "q", '\u024b': "q", '\uff51': "q", '\u24e0': "q",
	'\u0155': "r", '\u0157': "r", '\u0159': "r", '\ua75b': "r", '\ua783': "r",
	'\ua7a7': "r", '\u0211': "r", '\u0213': "r", '\u024d': "r", '\u027d': "r",
	'\uff52': "r", '\u1e59': "r", '\u1e5b': "r", '\u1e5d': "r", '\u1e5f': "r",
	'\u24e1': "r",
	'\u00df': "s", '\u015b': "s", '\u015d': "s", '\u015f': "s", '\u0161': "s",
	'\ua785': "s", '\ua7a9': "s", '\u0219': "s", '\u023f': "s", '\uff53': "s",
	'\u1e61': "s", '\u1e63': "s", '\u1e65': "s", '\u1e67': "s", '\u1e69': "s",
	'\u1e9b': "s", '\u24e2': "s",
	'\u2c66': "t", '\u0163': "t", '\u0165': "t", '\u0167': "t", '\ua787': "t",
	'\u01ad': "t", '\u021b': "t", '\u0288': "t", '\uff54': "t", '\u1e6b': "t",
	'\u1e6d': "t", '\u1e6f': "t", '\u1e71': "t", '\u1e97': "t", '\u24e3': "t",
	'\u00fe': "th", '\ua729': "tz",
	'\u00f9': "u", '\u00fa': "u", '\u00fb': "u", '\u00fc': "u", '\u0169': "u",
	'\u016b': "u", '\u016d': "u", '\u016f': "u", '\u0171': "u", '\u0173': "u",
	'\u01b0': "u", '\u01d4': "u", '\u01d6': "u", '\u01d8': "u", '\u01da': "u",
	'\u01dc': "u", '\u0215': "u", '\u0217': "u", '\u0289': "u", '\uff55': "u",
	'\u1e73': "u", '\u1e75': "u", '\u1e77': "u", '\u1e79': "u", '\u1e7b': "u",
	'\u1ee5': "u", '\u1ee7': "u", '\u1ee9': "u", '\u1eeb': "u", '\u1eed': "u",
	'\u1eef': "u", '\u1ef1': "u", '\u24e4': "u",
	'\ua75f': "v", '\u028b': "v", '\u028c': "v", '\uff56': "v", '\u1e7d': "v",
	'\u1e7f': "v", '\u24e5': "v", '\ua761': "vy",
	'\u2c73': "w", '\u0175': "w", '\uff57': "w", '\u1e81': "w", '\u1e83': "w",
	'\u1e85': "w", '\u1e87': "w", '\u1e89': "w", '\u1e98': "w", '\u24e6': "w",
	'\uff58': "x", '\u1e8b': "x", '\u1e8d': "x", '\u24e7': "x",
	'\u00fd': "y", '\u00ff': "y", '\u0177': "y", '\u01b4': "y", '\u0233': "y",
	'\u024f': "y", '\uff59': "y", '\u1e8f': "y", '\u1e99': "y", '\u1ef3': "y",
	'\u1ef5': "y", '\u1ef7': "y", '\u1ef9': "y", '\u1eff': "y", '\u24e8': "y",
	'\u2c6c': "z", '\u017a': "z", '\u017c': "z", '\u017e': "z", '\ua763': "z",
	'\u01b6': "z", '\u0225': "z", '\u0240': "z", '\uff5a': "z", '\u1e91': "z",
	'\u1e93': "z", '\u1e95': "z", '\u24e9': "z",
};
/**
 * A list of UTF8 quotation marks and apostrophes.
 **/
const QUOTATIONS = [
	'\u0022', '\u0027', '\u005e', '\u0060', '\u00ab', '\u00b4',
	'\u00bb', '\u02ba', '\u02dd', '\u02ee', '\u02f6', '\u05f2',
	'\u05f4', '\u1cd3', '\u201c', '\u201d', '\u201f', '\u2033',
	'\u2036', '\u3003', '\uff02'
];

/**
 * Creates a searchable/coded string based on a user inputted string.  Quotation marks, apostrophes, and accents are removed.
 * @param input
 **/
export function codify(input: string): string {
	if (!IS_STRING(input)) throw new TypeError("input value is not a string");
	var dash = true,
		output = "";
	input = input.toLowerCase();
	for (var i = 0, l = input.length; i < l; i++) {
		var char = input[i],
			letter = (DIACRITICS as any)[char] as string,
			code = (letter || char).charCodeAt(0),
			isQuote = !letter && QUOTATIONS.indexOf(char) > -1,
			isChar = !isQuote && (code >= 97 && code <= 122 || code >= 48 && code <= 57);
		if (isChar) output += letter || char;
		else if (!isQuote && !dash) output += '-';
		if (!isQuote) dash = !isChar;
	}
	return dash
		? output.slice(0, -1)
		: output;
}