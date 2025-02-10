import {
	ABS,
	INT,
	KEYS,
	MAX,
	MIN,
	OBJECT,
	POW,
	ROUND,
	SQRT,
} from "./Constants";
import { MERGE_INTERNAL } from "./Objects";

/**
 * Checks for both null and undefined
 * @param value The variable to check
 */
export function IS_NOTHING(value: any): value is null | undefined {
	return value === null
		|| typeof value === "undefined";
}
/**
 * Checks to see if the given parameter is a number object or number literal.
 * @param value The variable to check
 */
export function IS_BOOLEAN(value: any): value is boolean {
	return typeof value === "boolean"
		|| value instanceof Boolean;
}
/**
 * Checks to see if the given parameter is a number object or number literal.
 * @param value The variable to check
 */
export function IS_NUMBER(value: any): value is number {
	return typeof value === "number"
		|| value instanceof Number;
}
/**
 * Checks to see if the given parameter is a number object or number literal.
 * @param value The variable to check
 */
export function IS_STRING(value: any): value is string {
	return typeof value === "string"
		|| value instanceof String;
}
/**
 * Checks to see if the given parameter is a function from this window or another.
 * @param value The variable to check
 */
export function IS_FUNCTION(value: any): value is Function {
	return typeof value === "function"
		|| value instanceof Function;
}
/**
 * Returns the name of the given value's type.
 * @param value The variable to check
 */
export function OBJECT_TYPE(value: any): string {
	return OBJECT.prototype.toString.call(value).slice(8, -1);
}
/**
 * Almost the opposite of {@link isNaN}.
 * Checks to see if the given parameter is a number object, or number literal, and that it is not {@code value|NaN|Infinity}.
 * This method will return  {@code value|false} for values: {@code value|""}, {@code value|"1234"}, {@code value|null}, {@code value|undefined}, {@code value|true}, and {@code value|false}.
 * @param value The variable to check
 */
export function IS_AN(value: any): value is number {
	return IS_NUMBER(value)
		|| !isNaN(value)
		|| isFinite(value);
}

/**
 * Rounds a number to the desired number of decimal places. Using a negative places value will round to the nearest ten.
 * @param number The number to be rounded
 * @param places The number of decimal places.  Default is 0.
 */
export function ROUND_TO(number: number, places?: number): number {
	let power = POW(10, places || 0);
	return ROUND(number * power) / power;
}
/**
 * Clips a number to the specified minimum and maximum values.
 * @param n	The number to clip
 * @param min	Minimum allowable value
 * @param max	Maximum allowable value
 */
export function CLIP(n: number, min: number, max: number): number {
	return MIN(MAX(n, min), max);
}
/**
 * Calculates the Pythagorean length of a triangle given the length of the other two sides.
 * @param width
 * @param height
 */
export function PYTHAGORA(width: number, height: number): number {
	return SQRT(ABS(width * width) + ABS(height * height));
}
/**
 * Parses a base-10 integer number from the given value.
 * @param value
 */
export function ID(value: any): number {
	return INT(value, 10);
}

/**
 * Creates a Date object out of the given value.
 * @param value
 */
export function DATE(value?: string | number | Date): Date {
	return new Date(
		value instanceof Date
			? value.valueOf()
			: IS_NUMBER(value)
				? value
				: Date.parse(String(value))
	);
}

/**
 * 
 */
interface DouglasPeukerOrthogonal<TCoord> {
	(firstCoord: TCoord, middleCoord: TCoord, lastCoord: TCoord): number;
}
/**
 * An implementation of the Douglas-Peucker path reduction algorithm.
 * @template TCoord			A type of coordinate like a pixel or lat/lng.
 * @param source			Array of coordinates.
 * @param triangleHeight	Callback which performs a triangle height calculation between first point, middle point, and last point.
 * @param tolerance			The "kink" threshold.
 * @returns					Elements in the array are true if they should be kept.
 */
export function DOUGLASPEUCKER_INTERNAL<TCoord>(
	source: TCoord[],
	triangleHeight: DouglasPeukerOrthogonal<TCoord>,
	tolerance: number
): boolean[] {
	// references the indexes in the source array that should be kept
	const keepers: boolean[] = new Array(source.length);
	
	// the queue is initially populated with just the first and last index of the source
	let checkers = [
		0,
		source.length - 1
	];
	// work the queue
	while (checkers.length > 0) {
		const firstIndex = checkers.shift() as number,
			lastIndex = checkers.shift() as number;

		// the first and last items are flagged as keepers
		keepers[firstIndex] =
			keepers[lastIndex] = true;

		// we need at least 3 points to check this segment
		// so lastIndex - firstIndex needs to be 2 or more
		if (lastIndex - firstIndex > 1) {
			let farthestIndex = -1,
				farthestDistance = 0;
			const firstPoint = source[firstIndex],
				lastPoint = source[lastIndex];

			// find the widest orthogonal distance
			for (let i = firstIndex + 1; i < lastIndex; i++) {
				// ABS because circle distance can be negative (to the right of circle)
				// as well as positive (to the left of circle)
				const distance = triangleHeight(firstPoint, source[i], lastPoint);
				if (!IS_AN(distance)) throw new RangeError("triangleHeight returned NaN");
				if (distance > farthestDistance) {
					farthestDistance = distance;
					farthestIndex = i;
				}
			}

			// if that distance is farther than the tolerance
			if (farthestIndex > -1 && farthestDistance >= tolerance) {
				// add the first index and farthest index to the checkers queue
				checkers.push(firstIndex, farthestIndex);
				// also add the farthest and last index to the checkers queue
				checkers.push(farthestIndex, lastIndex);
			}
		}
	}

	// array of indexes to keep from the source
	return keepers;
}
/**
 * An implementation of the {@link https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm|Ramer-Douglas-Peucker} path reduction algorithm.
 * The source array should be more than two items in length, otherwise reduction is pointless.
 * The callback function returns a number (greater than zero) as the triangle height as defiend by three points; first point, middle point, and last point.
 * The "kink" threshold is set using the tolerance argument which must be a number greater than or equal to zero.
 * @template TCoord
 * @param source						Array of coordinates of type "T".
 * @param triangleHeight	Callback which performs a triangle height calculation between first point, middle point, and last point.
 * @param tolerance						The "kink" threshold
 */
export function DOUGLASPEUCKER<TCoord>(
	source: TCoord[],
	triangleHeight: DouglasPeukerOrthogonal<TCoord>,
	tolerance: number
): TCoord[] {
	if (!Array.isArray(source)) throw new TypeError("source is not an Array.");
	if (!IS_FUNCTION(triangleHeight)) throw new TypeError("triangleHeight is not an Function.");
	if (!IS_AN(tolerance) || tolerance < 0) throw new TypeError("tolerance is not an Number or less than zero.");
	return source.length < 3
		? [...source]
		: source.filter(
			FILTER_BY_BOOLEAN_ARRAY,
			DOUGLASPEUCKER_INTERNAL(source, triangleHeight, tolerance)
		);
}

/**
 * The key used for encoding/decoding Provider passwords.
 */
const PASSWORD_KEY = INT("33", 36); //111
/**
 * Encodes the given string as a Provider password.
 */
export function PASSWORD_ENCODE(value: string): string {
	return escape(value.split("").reduce(function (encoded, char) {
		return encoded + String.fromCharCode(char.charCodeAt(0) ^ PASSWORD_KEY);
	}, ""));
}
/**
 * Decodes the given Provider password as a human readable value.
 */
export function PASSWORD_DECODE(value: string): string {
	return unescape(value).split("").reduce(function (decoded, char) {
		return decoded + String.fromCharCode(char.charCodeAt(0) ^ PASSWORD_KEY);
	}, "");
}


/**
 * For validating phone numbers using the 1 prefix (ie: 14161234567)
 */
const PHONE_ELEVEN = 1e10;
/**
 * For validating phone number ranges.
 * This is the lowest possible 9-digit phone numnber.
 */
const PHONE_LOWEST = 2e9;
/**
 * For validating phone number ranges.
 * This is the highest possible 9-digit phone numnber.
 */
const PHONE_HIGHEST = 999e7;
/**
 * Parses the input and returns a valid phone number prefixed by 1, or NaN if invalid.
 * @param phone
 * */
export function PHONE_PARSE(phone: string | number): number {
	let number = ID(phone);
	if (number) {
		const eleven = number > PHONE_ELEVEN;
		if (eleven) number -= PHONE_ELEVEN;
		if (number <= PHONE_LOWEST || number >= PHONE_HIGHEST) number = NaN;
		if (eleven && number) number += PHONE_ELEVEN;
	}
	return number || NaN;
}


/**
 * Internal method for returning a string representation of the given number, padded with zeros.
 * @param num
 * @param length
 * @param decimals
 * @param radix
 */
export function ZERO_PADDED(
	num: number,
	length: number,
	decimals: number = 0,
	radix: number = 10
): string {
	const strings = num.toString(radix).split(".");
	if (decimals && strings.length === 1) {
		strings.push("0");
	}
	if (strings[0].length < length) {
		strings[0] = "0".repeat(length - strings[0].length) + strings[0];
	}
	if (strings[1] && strings[1].length < decimals) {
		strings[1] += "0".repeat(decimals - strings[1].length);
	}
	return strings.join(".");
}

/**
 * 
 */
interface PREDICATE_MAP_TO_OBJECT<K, V> {
	(key: K, value: V): [string, any];
}
/**
 * 
 * @param source 
 * @param deep 
 * @returns 
 */
export function MAP_TO_OBJECT(
	source: Map<any, any>,
	deep: boolean = true
): object {
  const target: any = {};
  source.forEach((v, k) => target[k] = deep ? MERGE_INTERNAL(v) : v);
  return target;
}
/**
 * 
 * @param source 
 * @param deep 
 * @returns 
 */
export function MAP_TO_OBJECT_PREDICATE<K, V>(
	source: Map<K, V>,
	predicate: PREDICATE_MAP_TO_OBJECT<K, V>
): object {
	const target: any = {};
	for (let [k, v] of source.entries()) {
		const [key, value] = predicate(k, v);
		target[key] = value;
	}
	return target;
}


/**
 * 
 */
interface PREDICATE_OBJECT_TO_MAP<K, V> {
	(key: string, value: any): [K, V];
}
/**
 * 
 * @param map 
 * @param deep 
 * @returns 
 */
export function OBJECT_TO_MAP(
	source: object,
	deep: boolean = true
) {
	return OBJECT_TO_MAP_BY_PREDICATE<string, any>(
		source,
		(k, v) => [k, deep ? MERGE_INTERNAL(v) : v]
	);
}
/**
 * 
 * @param map 
 * @param deep 
 * @returns 
 */
export function OBJECT_TO_MAP_BY_PREDICATE<K, V>(
	source: object,
	predicate: PREDICATE_OBJECT_TO_MAP<K, V>
) {
	const keys = KEYS(source),
		target: Map<K, V> = new Map;
	for (let i = 0; i < keys.length; i++) {
		const [key, value] = predicate(keys[i], (source as any)[keys[i]]);
		target.set(key, value);
	}
	return target;
}

/**
 * 
 * @param this 
 * @param value 
 * @returns 
 */
export function STRING_TO_ENUM<T extends { [key: string]: T | undefined }>(this: T, value: string): T | undefined {
	return this[value] as T;
}