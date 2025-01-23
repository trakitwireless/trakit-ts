
/**
 * The key used for encoding/decoding Provider passwords.
 */
const PASSWORD_KEY = 111;

/**
 * Encodes the given string as a {@link Provider#password}.
 */
export function passwordEncode(value: string): string {
	return encodeURIComponent([...value].reduce(function(encoded, char) {
		return encoded + String.fromCharCode(char.charCodeAt(0) ^ PASSWORD_KEY);
	}, ""));
}
/**
 * Decodes the given {@link Provider#password} as a human readable value.
 * @param value
 * */
export function passwordDecode(value: string): string {
    return [...decodeURIComponent(value)].reduce(function (decoded, char) {
        return decoded + String.fromCharCode(char.charCodeAt(0) ^ PASSWORD_KEY);
    }, "");
}