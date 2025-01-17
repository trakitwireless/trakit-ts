/** @type {Function} */
const SET_TIMER = setTimeout;
/** @type {Function} */
const SET_EVERY = setInterval;
/** @type {Function} */
const CLEAR_TIMER = clearTimeout;
/** @type {Function} */
const CLEAR_EVERY = clearInterval;
/** @type {Function} */
const INT = parseInt;
/** @type {Function} */
const FLOAT = parseFloat;

/** @type {Object} */
const MATH = Math;
/** @type {number} */
const PI = MATH.PI;
/** @type {number} */
const HALF_PI = PI / 2;
/** @type {Function} */
const ABS = MATH.abs;
/** @type {Function} */
const ACOS = MATH.acos;
/** @type {Function} */
const ASIN = MATH.asin;
/** @type {Function} */
const ATAN = MATH.atan;
/** @type {Function} */
const ATAN2 = MATH.atan2;
/** @type {Function} */
const CEIL = MATH.ceil;
/** @type {Function} */
const COS = MATH.cos;
/** @type {Function} */
const EXP = MATH.exp;
/** @type {Function} */
const FLOOR = MATH.floor;
/** @type {Function} */
const LOG = MATH.log;
/** @type {Function} */
const MAX = MATH.max;
/** @type {Function} */
const MIN = MATH.min;
/** @type {Function} */
const POW = MATH.pow;
/** @type {Function} */
const RANDOM = MATH.random;
/** @type {Function} */
const ROUND = MATH.round;
/** @type {Function} */
const SIN = MATH.sin;
/** @type {Function} */
const SQRT = MATH.sqrt;
/** @type {Function} */
const TAN = MATH.tan;
/**
 * Does fast 32bit uint multiplication (from C++).  Used mostly in ASM.
 * @param a
 * @param b
 **/
const IMUL = MATH["imul"] || function imul(a: number, b: number): number {
	const ah = (a >>> 16) & 0xffff;
	const al = a & 0xffff;
	const bh = (b >>> 16) & 0xffff;
	const bl = b & 0xffff;
	// the shift by 0 fixes the sign on the high part
	// the final |0 converts the unsigned value into a signed value
	return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);
};

/** @type {number} */
const RADIANS_TO_DEGREES = 180 / PI;	// radians to degrees: value * (180 / pi)
/** @type {number} */
const DEGREES_TO_RADIANS = PI / 180;	// degrees to radians: value * (pi / 180)

/**
 * Clips a number to the specified minimum and maximum values.
 * @param n	The number to clip
 * @param min	Minimum allowable value
 * @param max	Maximum allowable value
 **/
function CLIP(n: number, min: number, max: number): number {
	return MIN(MAX(n, min), max);
}
/**
 * Calculates the Pythagorean length of a triangle given the length of the other two sides.
 * @param width
 * @param height
 **/
function PYTHAGORA(width: number, height: number): number {
	return SQRT(ABS(width * width) + ABS(height * height));
}
/**
 * Parses a base-10 integer number from the given value.
 * @param value
 **/
function ID(value: any): number {
	return INT(value, 10);
}