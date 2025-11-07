import { IS_NOTHING } from "./Functions";

/**
 * The key used for encoding/decoding Provider passwords.
 */
const PASSWORD_KEY = 111;

/**
 * Encodes the given string as a {@link Provider#password}.
 */
export function PASSWORD_ENCODE(value: string): string {
	return encodeURIComponent([...(!IS_NOTHING(value) ? String(value) : "")].reduce(function (encoded, char) {
		return encoded + String.fromCharCode(char.charCodeAt(0) ^ PASSWORD_KEY);
	}, ""));
}
/**
 * Decodes the given {@link Provider#password} as a human readable value.
 * @param value
 * */
export function PASSWORD_DECODE(value: string): string {
	return [...decodeURIComponent(!IS_NOTHING(value) ? String(value) : "")].reduce(function (decoded, char) {
		return decoded + String.fromCharCode(char.charCodeAt(0) ^ PASSWORD_KEY);
	}, "");
}