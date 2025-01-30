import { KEYS } from './Constants';
import { IS_BOOLEAN, IS_NOTHING, IS_STRING } from './Functions';
/**
 * "#rrggbb" | "rgb(r, g, b)" | "rgba(r, g, b, a)";
 */
export type colour = string;
/**
 * lowercase-letters-numbers-and-single-hyphens-only
 */
export type codified = string;

/**
 * 
 */
export type JsonObject = { [key: string]: JsonValue };
/**
 * 
 */
export type JsonArray = JsonValue[];
/**
 * 
 */
export type JsonValue =
  | null
  | boolean
  | number
  | string
  | JsonValue[]
  | JsonObject;


/**
 * 
 */
export type byte = number;
/**
 * 
 */
export type int = number;
/**
 * 
 */
export type uint = number;
/**
 * 
 */
export type short = number;
/**
 * 
 */
export type ushort = number;
/**
 * 
 */
export type long = number;
/**
 * 
 */
export type ulong = number;
/**
 * 
 */
export type float = number;
/**
 * 
 */
export type single = number;
/**
 * 
 */
export type double = number;

/**
 * Does a deep copy of values from one object to another.
 * @param target
 * @param source
 * @param goDeep
 * @returns target
 */
export function MERGE(target: object, source: object, goDeep: boolean = false) {
  const keys = KEYS(source);
  for (let i = 0, key; key = keys[i]; i++) {
    (target as any)[key] = goDeep
      ? MERGE_INTERNAL((source as any)[key], !!goDeep)
      : (source as any)[key];
  }
  return target;
}
/**
 * Used internally by {@link MERGE}.
 * @param value
 * @param goDeep
 */
function MERGE_INTERNAL(value: any, goDeep: boolean): any {
  if (value instanceof Array) {
    return value.map(v => MERGE_INTERNAL(v, goDeep));
  } else if (value instanceof Date) {
    return new Date(value);
  } else if (value instanceof Map) {
    const map = new Map;
    value.forEach((v, k) => map.set(k, MERGE_INTERNAL(v, goDeep)));
    return map;
  } else if (value instanceof Set) {
    const set = new Set;
    value.forEach(v => set.add(MERGE_INTERNAL(v, goDeep)));
    return set;
  } else if (value instanceof RegExp) {
    return new RegExp(
      value.source,
      (value.global ? "g" : "")
      + (value.ignoreCase ? "i" : "")
      + (value.multiline ? "m" : "")
    );
  } else if (typeof value === "object" && value !== null) {
    return MERGE({}, value, goDeep);
  } else {
    return value;
  }
}