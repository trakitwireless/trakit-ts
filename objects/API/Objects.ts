import { KEYS } from './Constants';

/**
 * https://stackoverflow.com/questions/49682569/typescript-merge-object-types#answer-49683575
 * This is how you get TypeScript to properly infer the keys and values from the objects given to the {@link MERGE} function.
 */
type OptionalPropertyNames<T> = { [K in keyof T]-?: ({} extends { [P in K]: T[K] } ? K : never) }[keyof T];
type SpreadProperties<L, R, K extends keyof L & keyof R> = { [P in K]: L[P] | Exclude<R[P], undefined> };
type Id<T> = T extends infer U ? { [K in keyof U]: U[K] } : never;
// type SpreadTwo<L, R> = Id<
//   & Pick<L, Exclude<keyof L, keyof R>>
//   & Pick<R, Exclude<keyof R, OptionalPropertyNames<R>>>
//   & Pick<R, Exclude<OptionalPropertyNames<R>, keyof L>>
//   & SpreadProperties<L, R, OptionalPropertyNames<R> & keyof L>
// >;
type SpreadTwo<R, L> = Id<  // L/R reversed because we don't overwrite properties
  & Pick<L, Exclude<keyof L, keyof R>>
  & Pick<R, Exclude<keyof R, OptionalPropertyNames<R>>>
  & Pick<R, Exclude<OptionalPropertyNames<R>, keyof L>>
  & SpreadProperties<L, R, OptionalPropertyNames<R> & keyof L>
>;
type Spread<A extends readonly [...any]> = A extends [infer L, ...infer R]
  ? SpreadTwo<L, Spread<R>>
  : unknown;

/**
 * Does a deep copy of values from one object to another.
 * If multiple objects are given, properties are not overwritten.
 * @param target
 * @param sources
 * @returns target
 */
export function MERGE<A extends object[]>(...sources: [...A]): Spread<A> {
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