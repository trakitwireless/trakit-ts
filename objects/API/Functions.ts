/**
 * Checks for both null and undefined
 * @param value The variable to check
 */
export function IS_NOTHING(value: any): boolean {
	return value === null
		|| typeof value === "undefined";
}
/**
 * Checks to see if the given parameter is a number object or number literal.
 * @param value The variable to check
 */
export function IS_BOOLEAN(value: any): boolean {
	return typeof value === "boolean"
		|| value instanceof Boolean;
}
/**
 * Checks to see if the given parameter is a number object or number literal.
 * @param value The variable to check
 * @return
 */
export function IS_NUMBER(value: any): boolean {
	return typeof value === "number"
		|| value instanceof Number;
}
/**
 * Checks to see if the given parameter is a number object or number literal.
 * @param value The variable to check
 */
export function IS_STRING(value: any): boolean {
	return typeof value === "string"
		|| value instanceof String;
}
/**
 * Checks to see if the given parameter is a function from this window or another.
 * @param value The variable to check
 */
export function IS_FUNCTION(value:any):boolean {
	return typeof value === "function"
		|| value instanceof Function;
}
/**
 * Returns the name of the given value's type.
 * @param value The variable to check
 */
export function OBJECT_TYPE(value: any): string {
	return Object.prototype.toString.call(value).slice(8, -1);
}
/**
 * Similar to {@code key|isNaN}, it checks to see if the given parameter is not a number object, not a number literal, and that it is {@code value|NaN}.
 * This method will return  {@code value|true} for values: {@code value|""}, {@code value|"1234"}, {@code value|null}, {@code value|undefined}, {@code value|true}, and {@code value|false}.
 * @param value The variable to check
 * @return {boolean}
 */
export function IS_NAN(value:any):boolean{
	return isNaN(value)
		|| !IS_NUMBER(value);
}
/**
 * Opposite of {@link utility.isNaN}.
 * Checks to see if the given parameter is a number object, or number literal, and that it is not {@code value|NaN}.
 * This method will return  {@code value|false} for values: {@code value|""}, {@code value|"1234"}, {@code value|null}, {@code value|undefined}, {@code value|true}, and {@code value|false}.
 * @param value The variable to check
 * @return {boolean}
 */
export function IS_AN(value:any):boolean {
	return !IS_NAN(value);
}

/**
 * Rounds a number to the desired number of decimal places. Using a negative places value will round to the nearest ten.
 * @param number The number to be rounded
 * @param places The number of decimal places.  Default is 0.
 */
export function ROUND_TO(number:number, places:number):number {
	var power = POW(10, places || 0);
	return ROUND(number * power) / power;
}