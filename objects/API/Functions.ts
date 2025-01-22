﻿import { ABS, INT, MAX, MIN, POW, ROUND, SQRT } from "./Constants";

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
 * @return
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
	return Object.prototype.toString.call(value).slice(8, -1);
}
/**
 * Similar to {@code key|isNaN}, it checks to see if the given parameter is not a number object, not a number literal, and that it is {@code value|NaN}.
 * This method will return  {@code value|true} for values: {@code value|""}, {@code value|"1234"}, {@code value|null}, {@code value|undefined}, {@code value|true}, and {@code value|false}.
 * @param value The variable to check
 * @return {boolean}
 */
export function IS_NAN(value: any): value is number {
	return isNaN(value)
		|| !IS_NUMBER(value);
}
/**
 * Opposite of {@link utility.isNaN}.
 * Checks to see if the given parameter is a number object, or number literal, and that it is not {@code value|NaN}.
 * This method will return  {@code value|false} for values: {@code value|""}, {@code value|"1234"}, {@code value|null}, {@code value|undefined}, {@code value|true}, and {@code value|false}.
 * @param value The variable to check
 * @return {boolean}
 */
export function IS_AN(value: any): value is number {
	return !IS_NAN(value);
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

/**
 * Creates a Date object out of the given value.
 * @param value
 **/
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
	(firstCoord: TCoord, midCoord: TCoord, lastCoord: TCoord): number;
}
/**
 * An implementation of the Douglas-Peucker path reduction algorithm.
 * @template TCoord			A type of coordinate like a pixel or lat/lng.
 * @param source			Array of coordinates.
 * @param triangleHeight	Callback which performs a triangle height calculation between first point, middle point, and last point.
 * @param tolerance			The "kink" threshold.
 * @returns					Elements in the array are true if they should be kept.
 */
export function DOUGLASPEUCKER<TCoord>(
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
				if (IS_NAN(distance)) throw new RangeError("triangleHeight returned NaN");
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
 * Given as the first argument to {@link Array#filter} where the second argument is a {@link boolean[]}.
 * @param this		The array of booleans to use to filter the source array.
 * @param object	Unused.
 * @param index		The index of the obect in the source array.
 * @returns 
 */
export function FILTER_BY_BOOLEAN_ARRAY(this: boolean[], object: unknown, index: number) {
	return this[index];
}