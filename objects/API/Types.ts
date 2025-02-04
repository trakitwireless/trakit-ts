//#region Number formats
/**
 * 8bit integer
 * @example minimum value (-128) to maximum value (127)
 **/
export type sbyte = number;
/**
 * 16bit integer
 * @example minimum value (-32768) to maximum value (32767)
 **/
export type short = number;
/**
 * 32bit integer
 * @example minimum value (-2147483648) to maximum value (2147483647)
 **/
export type int = number;
/**
 * 64bit integer
 * @example minimum value (-9223372036854775808) to maximum value (9223372036854775807)
 **/
export type long = number;

/**
 * 8bit unsigned integer
 * @example minimum value (0) to maximum value (255)
 **/
export type byte = number;
/**
 * 16bit unsigned integer
 * @example minimum value (0) to maximum value (65535)
 **/
export type ushort = number;
/**
 * 32bit unsigned integer
 * @example minimum value (0) to maximum value (4294967295)
 **/
export type uint = number;
/**
 * 64bit unsigned integer
 * @example minimum value (0) to maximum value (18446744073709551615)
 **/
export type ulong = number;

/**
 * Single-precision floating point number
 * @example minimum value (-3.40282347E+38F) to maximum value (3.40282347E+38F)
 **/
export type single = number;
/**
 * Double-precision floating point number
 * @example minimum value (-1.7976931348623157e+308) to maximum value (1.7976931348623157e+308)
 **/
export type double = number;

/**
 * A phone number for a phone in Canada or the United States of America. All phone numbers start with a 1 and are eleven digits long.
 * @example "[1]AAALLLSSSS"
 **/
export type phone = number;
//#endregion Number formats

//#region String formats
/**
 * A lower-case string with all the apostrophes and quotation marks [`"`, `'`, ```, `“`, and `”`] removed, and all non-alphanumeric character sequences replaced with a single minus sign.  Diacritics such as `®`, `é`, and `ç` are also replaced with their alhpabetic equivalents (`r`, `e`, and `c`).
 **/
export type codified = string;
/**
 * A string that contains only a valid CSS colour.
 * More: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value}
 **/
export type colour = string;
/**
 * A serialized-string representation of a date and time in ISO-8601 format.  Square brackets `[]` are used to show optional format information. All other non-alphabetic characters are required.
 * @example "yyyy-MM-ddTHH:mm:ss[.fff]Z"
 **/
export type datetime = string;
/**
 * These formats define the text representation of dates and times.
 **/
export type datetimetemplate = string;
/**
 * An email address identifies a mailbox to which messages are delivered. We follow the `RFC 2822` pattern for addresses.
 * More: {@link https://tools.ietf.org/html/rfc2822}
 * @example "user@domain.tld"
 **/
export type email = string;
/**
 * A targeting pattern is a string that represents an in-the-moment search for objects. The operators used depend entirely on the context of the search, and compatibility with the sub-system.
 * More: {@link https://fleetfreedom.freshdesk.com/en/support/solutions/articles/3000061325-advanced-search-options}
 * @example "operator:terms terms"
 **/
export type expression = string;
/**
 * Globally/Universally Unique Identifier. It is a 36 character long string made up of letters, numbers, and dashes. The letters can be transmitted as upper-case, lower-case, or a combination.
 * More: {@link https://docs.microsoft.com/en-us/dotnet/api/system.guid?view=net-5.0}
 * @example "xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx"
 **/
export type guid = string;
/**
 * A serialized-string representation of an IPv4 Address.  Square brackets `[]` are used to show optional format information. All other non-alphabetic characters are required.
 * @example "n.n.n.n[/r]"
 **/
export type ipv4 = string;
/**
 * The algorithm is a lossy compression that stores a series of coordinates as a single string. All coordinates are rounded to six decimal places before encoding, but this should be accurate to within roughly one and a half meters.
 * More: {@link https://developers.google.com/maps/documentation/utilities/polylinealgorithm}
 **/
export type polyline = string;
/**
 * A serialized-string representation of a duration of time.  There are two possible formats when using a duration string.  Square brackets `[]` are used to show optional format information. All other non-alphabetic characters are required.
 * @example "[-][d.]H:mm[:ss[.fff]]"
 * @example "[-]d"
 **/
export type timespan = string;
/**
 * Most commonly a website address, but can also be any other type of locator like `ssh:`. We follow the `RFC 1738` pattern for addresses.
 * More: {@link https://tools.ietf.org/html/rfc1738}
 * @example "http[s]://domain.tld/path?query#fragment"
 * @example "protocol:path?query"
 **/
export type url = string;
//#endregion String formats

//#region JSON
// /**
//  * 
//  */
// export type JsonObject = object | { [key: string]: JsonValue };
// /**
//  * 
//  */
// export type JsonArray = JsonValue[];
// /**
//  * 
//  */
// export type JsonValue =
//   | null
//   | boolean
//   | number
//   | string
//   | JsonArray
//   | JsonObject;
//#endregion JSON