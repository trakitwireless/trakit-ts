/**
 * Used as the default value for timezones.
 * @type {!string}
 */
const DEFAULT_TIMEZONE = "utc";
/**
 * Used as the default value for timezones.
 * @type {!string}
 */
const DEFAULT_FORMAT_DATE = "MMM d, yyyy";
/**
 * Used as the default value for timezones.
 * @type {!string}
 */
const DEFAULT_FORMAT_TIME = "h:mm:ss tt";

/**
 * Timer methods that get used many places.
 */
export const
	SET_TIMER = setTimeout,
	SET_EVERY = setInterval,
	CLEAR_TIMER = clearTimeout,
	CLEAR_EVERY = clearInterval;

/**
 * Parsing functions that get used all over.
 */
export const
	INT = parseInt,
	FLOAT = parseFloat;

/**
 * 
 */
export const
	OBJECT = Object,
	KEYS = OBJECT.keys,
	FREEZE = OBJECT.freeze,
	JSON_PARSE = JSON.parse,
	JSON_STRINGIFY = JSON.stringify;

/**
 * Maths (as the Brits would say).
 */
export const
	MATH = Math,
	PI = MATH.PI,
	ABS = MATH.abs,
	ACOS = MATH.acos,
	ASIN = MATH.asin,
	ATAN = MATH.atan,
	ATAN2 = MATH.atan2,
	CEIL = MATH.ceil,
	COS = MATH.cos,
	EXP = MATH.exp,
	FLOOR = MATH.floor,
	LOG = MATH.log,
	MAX = MATH.max,
	MIN = MATH.min,
	POW = MATH.pow,
	RANDOM = MATH.random,
	ROUND = MATH.round,
	SIN = MATH.sin,
	SQRT = MATH.sqrt,
	TAN = MATH.tan;

/**
 * Constant values used for calculations in geometry and geography.
 * half of pi (used in mercator projects)
 * radians to degrees: value * (180 / pi)
 * degrees to radians: value * (pi / 180)
 */
export const
	HALF_PI = PI / 2,
	RADIANS_TO_DEGREES = 180 / PI,
	DEGREES_TO_RADIANS = PI / 180;

/**
 * 
 */
export const
	WIN = globalThis,
	DOC = WIN.document,
	LOC = WIN.location;
	