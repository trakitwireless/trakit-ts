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