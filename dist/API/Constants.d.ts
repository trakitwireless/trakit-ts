/**
 * Timer methods that get used many places.
 */
export declare const SET_TIMER: typeof setTimeout, SET_EVERY: typeof setInterval, CLEAR_TIMER: typeof clearTimeout, CLEAR_EVERY: typeof clearInterval;
/**
 * Parsing functions that get used all over.
 */
export declare const INT: typeof parseInt, FLOAT: typeof parseFloat;
/**
 *
 */
export declare const OBJECT: ObjectConstructor, KEYS: {
    (o: object): string[];
    (o: {}): string[];
}, FREEZE: {
    <T extends Function>(f: T): T;
    <T extends {
        [idx: string]: U | null | undefined | object;
    }, U extends string | bigint | number | boolean | symbol>(o: T): Readonly<T>;
    <T>(o: T): Readonly<T>;
}, JSON_PARSE: (text: string, reviver?: (this: any, key: string, value: any) => any) => any, JSON_STRINGIFY: {
    (value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
    (value: any, replacer?: (number | string)[] | null, space?: string | number): string;
};
/**
 * Maths (as the Brits would say).
 */
export declare const MATH: Math, PI: number, ABS: (x: number) => number, ACOS: (x: number) => number, ASIN: (x: number) => number, ATAN: (x: number) => number, ATAN2: (y: number, x: number) => number, CEIL: (x: number) => number, COS: (x: number) => number, EXP: (x: number) => number, FLOOR: (x: number) => number, LOG: (x: number) => number, MAX: (...values: number[]) => number, MIN: (...values: number[]) => number, POW: (x: number, y: number) => number, RANDOM: () => number, ROUND: (x: number) => number, SIN: (x: number) => number, SQRT: (x: number) => number, TAN: (x: number) => number;
/**
 * Constant values used for calculations in geometry and geography.
 * half of pi (used in mercator projects)
 * radians to degrees: value * (180 / pi)
 * degrees to radians: value * (pi / 180)
 */
export declare const HALF_PI: number, RADIANS_TO_DEGREES: number, DEGREES_TO_RADIANS: number;
/**
 *
 */
export declare const WIN: typeof globalThis, DOC: Document, LOC: Location;
//# sourceMappingURL=Constants.d.ts.map