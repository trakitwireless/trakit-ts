import { KEYS } from './Constants';

/**
 * Does a deep copy of values from one object to another.
 * If multiple objects are given, properties are not overwritten.
 * @param target
 * @param sources
 * @returns target
 */
export function MERGE(...sources: object[]): object {
  const target: any = {};
  for (let i = 0; i < sources.length; i++) {
    const source: any = sources[i],
      keys = KEYS(source);
    for (let j = 0; j < keys.length; j++) {
      const key = keys[i];
      if (!(key in target)) {
        target[key] = MERGE_INTERNAL(source[key]);
      }
    }
  }
  return target;
}
/**
 * Used internally by {@link MERGE}.
 * @param value
 * @param goDeep
 */
export function MERGE_INTERNAL(value: any): any {
  if (value instanceof Array) {
    return value.map(MERGE_INTERNAL);
  } else if (value instanceof Date) {
    return new Date(value);
  } else if (value instanceof Map) {
    const map = new Map;
    value.forEach((v, k) => map.set(k, MERGE_INTERNAL(v)));
    return map;
  } else if (value instanceof Set) {
    const set = new Set;
    value.forEach(v => set.add(MERGE_INTERNAL(v)));
    return set;
  } else if (value instanceof RegExp) {
    return new RegExp(
      value.source,
      (value.global ? "g" : "")
      + (value.ignoreCase ? "i" : "")
      + (value.multiline ? "m" : "")
    );
  } else if (value && typeof value === "object") {
    return MERGE({}, value);
  } else {
    return value;
  }
}