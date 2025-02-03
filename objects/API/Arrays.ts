import { KEYS } from './Constants';
import { IS_BOOLEAN, IS_NOTHING, IS_STRING } from './Functions';

/**
 * Returns the unique values from an array.
 * @template T
 * @param array
 */
export function ARRAY_UNIQUE<T>(array: T[]) {
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
export function ARRAY_INTERSECT<T>(array1: T[], array2: T[]) {
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
export function ARRAY_EXCEPT<T>(array1: T[], array2: T[]) {
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