/**
 * "#rrggbb" | "rgb(r, g, b)" | "rgba(r, g, b, a)";
 **/
export type colour = string;
/**
 * lowercase-letters-numbers-and-single-hyphens-only
 **/
export type codified = string;

/**
 * 
 **/
export type JsonObject = { [key: string]: JsonValue };
/**
 * 
 **/
export type JsonArray = JsonValue[];
/**
 * 
 **/
export type JsonValue =
  | null
  | boolean
  | number
  | string
  | JsonValue[]
  | JsonObject;


/**
 * 
 **/
export type byte = number;
/**
 * 
 **/
export type int = number;
/**
 * 
 **/
export type uint = number;
/**
 * 
 **/
export type short = number;
/**
 * 
 **/
export type ushort = number;
/**
 * 
 **/
export type long = number;
/**
 * 
 **/
export type ulong = number;
/**
 * 
 **/
export type float = number;
/**
 * 
 **/
export type single = number;
/**
 * 
 **/
export type double = number;

/**
 * Does a deep copy of values from one object to another
 * @param {!Object} target
 * @param {!Object} source
 * @param {boolean=} goDeep
 * @return {!Object} target
 */
export function merge(target: object, source: object, goDeep: boolean = false) {
  const keys = Object.keys(source);
  for (var i = 0, key = ""; key = keys[i]; i++) {
    (target as any)[key] = goDeep
      ? MERGE_INTERNAL((source as any)[key], !!goDeep)
      : (source as any)[key];
  }
  return target;
}
/**
 * Used internally by MERGE_OBJECTS
 * @param {?} value
 * @param {!boolean} goDeep
 */
function MERGE_INTERNAL(value: any, goDeep: boolean): any {
  if (value instanceof Array) return value.map(function (object) { return MERGE_INTERNAL(object, goDeep); });
  else if (value instanceof Boolean) return !!value;
  else if (value instanceof Date) return new Date(value);
  else if (value instanceof RegExp) return new RegExp(value.source, (value.global ? "g" : "") + (value.ignoreCase ? "i" : "") + (value.multiline ? "m" : ""));
  else if (value instanceof String) return value;
  else if (typeof value === "object") return merge({}, value, goDeep);
  else return value;
}