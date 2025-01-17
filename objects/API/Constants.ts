
/** @type {Function} */
var SET_TIMER = setTimeout;
/** @type {Function} */
var SET_EVERY = setInterval;
/** @type {Function} */
var CLEAR_TIMER = clearTimeout;
/** @type {Function} */
var CLEAR_EVERY = clearInterval;
/** @type {Function} */
var INT = parseInt;
/** @type {Function} */
var FLOAT = parseFloat;



/** @type {Object} */
var MATH = Math;
/** @type {number} */
var PI = MATH.PI;
/** @type {number} */
var HALF_PI = PI / 2;
/** @type {Function} */
var ABS = MATH.abs;
/** @type {Function} */
var ACOS = MATH.acos;
/** @type {Function} */
var ASIN = MATH.asin;
/** @type {Function} */
var ATAN = MATH.atan;
/** @type {Function} */
var ATAN2 = MATH.atan2;
/** @type {Function} */
var CEIL = MATH.ceil;
/** @type {Function} */
var COS = MATH.cos;
/** @type {Function} */
var EXP = MATH.exp;
/** @type {Function} */
var FLOOR = MATH.floor;
/** @type {Function} */
var LOG = MATH.log;
/** @type {Function} */
var MAX = MATH.max;
/** @type {Function} */
var MIN = MATH.min;
/** @type {Function} */
var POW = MATH.pow;
/** @type {Function} */
var RANDOM = MATH.random;
/** @type {Function} */
var ROUND = MATH.round;
/** @type {Function} */
var SIN = MATH.sin;
/** @type {Function} */
var SQRT = MATH.sqrt;
/** @type {Function} */
var TAN = MATH.tan;
/**
 * Does fast 32bit uint multiplication (from C++).  Used mostly in ASM.
 * @param a
 * @param b
 **/
var IMUL = MATH["imul"] || function imul(a: number, b: number): number {
	var ah = (a >>> 16) & 0xffff;
	var al = a & 0xffff;
	var bh = (b >>> 16) & 0xffff;
	var bl = b & 0xffff;
	// the shift by 0 fixes the sign on the high part
	// the final |0 converts the unsigned value into a signed value
	return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);
};

/** @type {number} */
var RADIANS_TO_DEGREES = 180 / PI;	// radians to degrees: value * (180 / pi)
/** @type {number} */
var DEGREES_TO_RADIANS = PI / 180;	// degrees to radians: value * (pi / 180)

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