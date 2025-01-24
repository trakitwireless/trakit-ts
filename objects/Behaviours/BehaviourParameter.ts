﻿import { BehaviourParameterType } from "./BehaviourParameterType";

/**
 * Definition of an argument passed to a Behaviour Script.
*/
export class BehaviourParameter {
	/**
	 * Simple type information for the compiler.
	 */
	public kind: BehaviourParameterType;
	/**
	 * The value is given as a string, but parsed into native type when compiled.
	 */
	public value: string = "";
	/**
	 * Usage notes.
	 */
	public notes: string = "";
	/**
	 * Gives a hint to the client on the best UI to use for editing.
	 * For example, "checkbox" is a good UI hint for booleanean parameter types.
	 */
	public context: string = "";

	constructor(kind: BehaviourParameterType, value: string, notes: string, context: string) {
		this.kind = kind;
		this.value = value;
		this.notes = notes;
		this.context = context;
	}
}