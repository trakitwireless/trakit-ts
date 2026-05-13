import { IIdUlong } from "./Interfaces/IIdUlong";
import { ISerializable } from "./Interfaces/ISerializable";
import { ulong } from "./Types";
/**
 * Returns the unique values from an array.
 * @template T
 * @param array
 */
export declare function ARRAY_UNIQUE<T>(array: T[]): T[];
/**
 * Returns an array of only those elements that existed in both input arrays.
 * @template T
 * @param array1
 * @param array2
 */
export declare function ARRAY_INTERSECT<T>(array1: T[], array2: T[]): T[];
/**
 * Returns an array of only those elements that existe in both array1, and not in array2.
 * @template T
 * @param array1
 * @param array2
 */
export declare function ARRAY_EXCEPT<T>(array1: T[], array2: T[]): T[];
/**
 * Given as the first argument to {@link Array#map}, the {@link IIdUlong.id}s are returned.
 * @param   object
 */
export declare function ARRAY_TO_IDS(object: IIdUlong): ulong;
/**
 * Given as the first argument to {@link Array#map}, the {@link IIdUlong.id}s are returned.
 * @param   object
 */
export declare function ARRAY_TO_JSON(object: ISerializable): any;
/**
 *
 * @param type
 * @param array
 */
export declare function ARRAY_TO_ENUMS<T>(type: any, array: string[]): T[];
/**
 * Given as the first argument to {@link Array#filter} where the second argument is a {@link boolean[]}.
 * @param this		The array of booleans to use to filter the source array.
 * @param object	Unused.
 * @param index		The index of the obect in the source array.
 */
export declare function FILTER_BY_BOOLEAN_ARRAY(this: boolean[], object: unknown, index: number): boolean;
//# sourceMappingURL=Arrays.d.ts.map