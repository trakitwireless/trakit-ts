/** @type {Function} */
export const SET_TIMER = setTimeout;
/** @type {Function} */
export const SET_EVERY = setInterval;
/** @type {Function} */
export const CLEAR_TIMER = clearTimeout;
/** @type {Function} */
export const CLEAR_EVERY = clearInterval;
/** @type {Function} */
export const INT = parseInt;
/** @type {Function} */
export const FLOAT = parseFloat;

/** @type {Object} */
export const MATH = Math;
/** @type {number} */
export const PI = MATH.PI;
/** @type {number} */
export const HALF_PI = PI / 2;
/** @type {Function} */
export const ABS = MATH.abs;
/** @type {Function} */
export const ACOS = MATH.acos;
/** @type {Function} */
export const ASIN = MATH.asin;
/** @type {Function} */
export const ATAN = MATH.atan;
/** @type {Function} */
export const ATAN2 = MATH.atan2;
/** @type {Function} */
export const CEIL = MATH.ceil;
/** @type {Function} */
export const COS = MATH.cos;
/** @type {Function} */
export const EXP = MATH.exp;
/** @type {Function} */
export const FLOOR = MATH.floor;
/** @type {Function} */
export const LOG = MATH.log;
/** @type {Function} */
export const MAX = MATH.max;
/** @type {Function} */
export const MIN = MATH.min;
/** @type {Function} */
export const POW = MATH.pow;
/** @type {Function} */
export const RANDOM = MATH.random;
/** @type {Function} */
export const ROUND = MATH.round;
/** @type {Function} */
export const SIN = MATH.sin;
/** @type {Function} */
export const SQRT = MATH.sqrt;
/** @type {Function} */
export const TAN = MATH.tan;
/**
 * Does fast 32bit uint multiplication (from C++).  Used mostly in ASM.
 * @param a
 * @param b
 **/
export const IMUL = MATH["imul"] || function imul(a: number, b: number): number {
	const ah = (a >>> 16) & 0xffff;
	const al = a & 0xffff;
	const bh = (b >>> 16) & 0xffff;
	const bl = b & 0xffff;
	// the shift by 0 fixes the sign on the high part
	// the final |0 converts the unsigned value into a signed value
	return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);
};

/** @type {number} */
export const RADIANS_TO_DEGREES = 180 / PI;	// radians to degrees: value * (180 / pi)
/** @type {number} */
export const DEGREES_TO_RADIANS = PI / 180;	// degrees to radians: value * (pi / 180)

/**
 * Clips a number to the specified minimum and maximum values.
 * @param n	The number to clip
 * @param min	Minimum allowable value
 * @param max	Maximum allowable value
 **/
export function CLIP(n: number, min: number, max: number): number {
	return MIN(MAX(n, min), max);
}
/**
 * Calculates the Pythagorean length of a triangle given the length of the other two sides.
 * @param width
 * @param height
 **/
export function PYTHAGORA(width: number, height: number): number {
	return SQRT(ABS(width * width) + ABS(height * height));
}
/**
 * Parses a base-10 integer number from the given value.
 * @param value
 **/
export function ID(value: any): number {
	return INT(value, 10);
}