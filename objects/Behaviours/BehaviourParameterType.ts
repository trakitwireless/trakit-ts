/**
 * Possible data-types given to BehaviourParameters.
 */
export enum BehaviourParameterType {
	/**
	 * True or false.
	 */
	boolean = "boolean",
	/**
	 * Numeric value (signed double-precision floating point number).
	 */
	number = "number",
	/**
	 * Text.
	 */
	text = "text",
	/**
	 * Object or array literal.
	 */
	json = "json",
}