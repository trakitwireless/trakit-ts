import { SyncName } from "../index";
import { BaseComponent } from "./BaseComponent";
import { datetime, JsonObject, nothing } from "./Types";
/**
 * Checks for both null and undefined
 * @param value The variable to check
 */
export declare function IS_NOTHING(value: any): value is nothing;
/**
 * Checks to see if the given parameter is a number object or number literal.
 * @param value The variable to check
 */
export declare function IS_BOOLEAN(value: any): value is boolean;
/**
 * Checks to see if the given parameter is a number object or number literal.
 * @param value The variable to check
 */
export declare function IS_NUMBER(value: any): value is number;
/**
 * Checks to see if the given parameter is a number object or number literal.
 * @param value The variable to check
 */
export declare function IS_STRING(value: any): value is string;
/**
 * Checks to see if the given parameter is a function from this window or another.
 * @param value The variable to check
 */
export declare function IS_FUNCTION(value: any): value is Function;
/**
 * Returns the name of the given value's type.
 * @param value The variable to check
 */
export declare function OBJECT_TYPE(value: any): string;
/**
 * Almost the opposite of {@link isNaN}.
 * Checks to see if the given parameter is a number object, or number literal, and that it is not {@code value|NaN|Infinity}.
 * This method will return  {@code value|false} for values: {@code value|""}, {@code value|"1234"}, {@code value|null}, {@code value|undefined}, {@code value|true}, and {@code value|false}.
 * @param value The variable to check
 */
export declare function IS_AN(value: any): value is number;
/**
 * Some objects are made up of the pieces of many objects.
 * {@link Asset}
 * {@link Company}
 * {@link Provider}
 * {@link User}
 */
export declare const COMPOUNDS: SyncName[];
/**

* Checks to see if the given value is a compound component or not.
 * @param value
 * @returns
 */
export declare function IS_COMPOUNDED(value: BaseComponent | object | SyncName): boolean;
/**
 * Rounds a number to the desired number of decimal places. Using a negative places value will round to the nearest ten.
 * @param number The number to be rounded
 * @param places The number of decimal places.  Default is 0.
 */
export declare function ROUND_TO(number: number, places?: number): number;
/**
 * Clips a number to the specified minimum and maximum values.
 * @param n	The number to clip
 * @param min	Minimum allowable value
 * @param max	Maximum allowable value
 */
export declare function CLIP(n: number, min: number, max: number): number;
/**
 * Calculates the Pythagorean length of a triangle given the length of the other two sides.
 * @param width
 * @param height
 */
export declare function PYTHAGORA(width: number, height: number): number;
/**
 * Parses a base-10 integer number from the given value.
 * @param value
 */
export declare function ID(value: any): number;
/**
 * Creates a Date object out of the given value.
 * @param value
 */
export declare function DATE(value?: Date | number | datetime | nothing): Date;
/**
 * An implementation of the Douglas-Peucker path reduction algorithm.
 * @template TCoord			A type of coordinate like a pixel or lat/lng.
 * @param source			Array of coordinates.
 * @param triangleHeight	Callback which performs a triangle height calculation between first point, middle point, and last point.
 * @param tolerance			The "kink" threshold.
 * @returns					Elements in the array are true if they should be kept.
 */
export declare function DOUGLASPEUCKER_INTERNAL<TCoord>(source: TCoord[], triangleHeight: (first: TCoord, middle: TCoord, last: TCoord) => number, tolerance: number): boolean[];
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
export declare function DOUGLASPEUCKER<TCoord>(source: TCoord[], triangleHeight: (first: TCoord, middle: TCoord, last: TCoord) => number, tolerance: number): TCoord[];
/**
 * Returns a plural version of the given word.
 * This obviously doesn't work for every word imaginable, but covers the standard object names in the Trak-iT APIs.
 * @param word
 * @returns
 */
export declare function PLURALIZE(word: string): string;
/**
 * Returns a singular version of the given word.
 * This obviously doesn't work for every word imaginable, but covers the standard object names in the Trak-iT APIs.
 * @param word
 * @returns
 */
export declare function SINGULARIZE(word: string): string;
/**
 * Returns the given word with the first letter capitalized (or lower-cased).
 * @param word
 * @param upper
 * @returns
 */
export declare function CAPITALIZE(word: string, upper?: boolean): string;
/**
 * Parses the input and returns a valid phone number prefixed by 1, or NaN if invalid.
 * @param phone
 * */
export declare function PHONE_PARSE(phone: string | number | undefined): number;
/**
 * Internal method for returning a string representation of the given number, padded with zeros.
 * @param num
 * @param length
 * @param decimals
 * @param radix
 */
export declare function ZERO_PADDED(num: number, length: number, decimals?: number, radix?: number): string;
/**
 *
 * @param source
 * @param deep
 * @returns
 */
export declare function MAP_TO_JSON(source: Map<any, any>, deep?: boolean): JsonObject;
/**
 *
 * @param source
 * @param deep
 * @returns
 */
export declare function MAP_TO_JSON_PREDICATE<K, V>(source: Map<K, V>, predicate: (key: K, value: V) => [string, any]): JsonObject;
/**
 *
 * @param map
 * @param deep
 * @returns
 */
export declare function JSON_TO_MAP_PREDICATE<K, V>(source: object, predicate: (key: string, value: any) => [K, V]): Map<K, V>;
/**
 *
 * @param map
 * @param deep
 * @returns
 */
export declare function JSON_TO_MAP(source: object, deep?: boolean): Map<string, any>;
/**
 *
 * @param map
 * @param deep
 * @returns
 */
export declare function JSON_TO_MAP_KEY_CODIFIED(source: object, deep?: boolean): Map<string, any>;
/**
 *
 * @param map
 * @param deep
 * @returns
 */
export declare function JSON_TO_MAP_KEY_ULONG(source: object, deep?: boolean): Map<number, any>;
/**
 *
 * @param this
 * @param value
 * @returns
 */
export declare function STRING_TO_ENUM<T extends {
    [key: string]: T;
}>(this: T, value: string): T;
/**
 * Serializes a {@link Number} as itself, or null instead of {@link NaN} (for use in {@link ISerializable.toJSON}).
 * @param date
 */
export declare function JSON_NUMBER(num: number): number | null;
/**
 *
 */
export declare const WEEKDAYS: boolean[];
/**
 * Creates an array of 7 boolean values.
 * Extra values from the input are ignored.
 * @param days
 */
export declare function WEEKDAYS_PARSE(days: string | boolean[]): boolean[];
/**
 * Creates as string of 7 characters (either `1` or `0`).
 */
export declare function WEEKDAYS_JSON(days: string | boolean[]): string;
//# sourceMappingURL=Functions.d.ts.map