import { IIdUlong } from "./Interfaces/IIdUlong";
import { ulong } from "./Types";

/**
 * Returns the unique values from an array.
 * @template T
 * @param array
 */
export function ARRAY_UNIQUE<T>(array: T[]): T[] {
  const result: T[] = [];
  for (let i = 0, l = array.length; i < l; i++) {
    if (result.indexOf(array[i]) < 0) {
      result.push(array[i]);
    }
  }
  return result;
}
/**
 * Returns an array of only those elements that existed in both input arrays.
 * @template T
 * @param array1	
 * @param array2	
 */
export function ARRAY_INTERSECT<T>(array1: T[], array2: T[]): T[] {
  const result: T[] = [];
  for (let i = 0, l = array1.length; i < l; i++) {
    for (let j = 0, c = array2.length; j < c; j++) {
      if (array1[i] === array2[j]) result.push(array1[i]);
    }
  }
  return result;
}
/**
 * Returns an array of only those elements that existe in both array1, and not in array2.
 * @template T
 * @param array1	
 * @param array2	
 */
export function ARRAY_EXCEPT<T>(array1: T[], array2: T[]): T[] {
  const results: T[] = [];
  for (let i = 0, l = array1.length; i < l; i++) {
    let found = false;
    for (let j = 0, c = array2.length; j < c; j++) {
      found = array1[i] === array2[j];
      if (found) break;
    }
    if (!found) results.push(array1[i]);
  }
  return results;
}

/**
 * Given as the first argument to {@link Array#map}, the {@link IIdUlong.id}s are returned.
 * @param   object
 */
export function ARRAY_TO_IDS(object: IIdUlong): ulong {
  return object.id;
}

/**
 * Given as the first argument to {@link Array#filter} where the second argument is a {@link boolean[]}.
 * @param this		The array of booleans to use to filter the source array.
 * @param object	Unused.
 * @param index		The index of the obect in the source array.
 */
export function FILTER_BY_BOOLEAN_ARRAY(
  this: boolean[],
  object: unknown,
  index: number
) {
  return this[index];
}
