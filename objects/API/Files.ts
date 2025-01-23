import {
	ABS,
	MAX,
} from "./Constants";

/**
 * An array of filesize suffixes where the index in the array represents the "level" of size.
 */
const FILESIZE_SUFFIX = [
	"B",		// byte				= 1
	"KB",	// Kilobyte			= 1,000
	"MB",	// Megabyte			= 1,000,000
	"GB",	// Gigabyte			= 1,000,000,000
//	int32 max						= 2,147,483,647
//	uint32 max					= 4,294,967,295
	"TB",	// Terabyte			= 1,000,000,000,000
	"PB",	// Petabyte			= 1,000,000,000,000,000
	"EB",	// Exabyte			= 1,000,000,000,000,000,000
//	int64 max						= 9,223,372,036,854,775,807
//	uint64 max value				= 18,446,744,073,709,551,615
	"ZB",	// Zettabyte			= 1,000,000,000,000,000,000,000
	"YB",	// Yottabyte			= 1,000,000,000,000,000,000,000,000
	"XB",	// Xenottabyte			= 1,000,000,000,000,000,000,000,000,000
	"SB",	// Shilentnobyte		= 1,000,000,000,000,000,000,000,000,000,000
	"DB",	// Domegemegrottebyte	= 1,000,000,000,000,000,000,000,000,000,000,000
];

/**
 * Groups digits of a number together to make a more human readable version.
 * @param {!number} number The number to be prettified
 * @param {number=} size				Quantity of digits per number group.  The default is 3.
 * @param {string=} delimiter			Character(s) to use to divide the integer groups.  The detauls is ",".
 * @param {string=} decimalDelimiter	Character(s) to use to divide the decimal groups.  The detauls is same as delimiter.
 * @param {string=} point			Character(s) to use to divide the integer groups from the decimal groups. The detauls is ".".
 * @throws {TypeError}				size must be greater than zero
 * @return {!string}
 */
export function numberGroups(
	number: number,
	size: number = 3,
	delimiter: string = ",",
	decimalDelimiter: string = delimiter,
	point: string = "."
) {
	if (!(size > 0)) throw new TypeError("size must be greater than zero.");
	const neg = number < 0 ? "-" : "",
		splits = ABS(number).toString().split("."),
		ints: string[] = [],
		decs: string[] = [];
	for (var i = splits[0].length; i > 0; i -= size) {
		ints.unshift(splits[0].slice(MAX(0, i - size), i));
	}
	if (splits.length > 1) {
		for (var i = 0, l = splits[1].length; i < l; i += size) {
			decs.push(splits[1].slice(i, i + size));
		}
	}
	return neg
		+ ints.join(delimiter)
		+ (
			decs.length
				? (point ?? "") + decs.join(decimalDelimiter)
				: ""
		);
}