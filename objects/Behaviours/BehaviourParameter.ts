import { BehaviourParameterType } from "./BehaviourParameterType";

/// <summary>
/// Definition of an argument passed to a Behaviour Script.
/// </summary>
export class BehaviourParameter {
	/// <summary>
	/// Simple type information for the compiler.
	/// </summary>
	public kind: BehaviourParameterType;
	/// <summary>
	/// The value is given as a string, but parsed into native type when compiled.
	/// </summary>
	public value: string = "";
	/// <summary>
	/// Usage notes.
	/// </summary>
	public notes: string = "";
	/// <summary>
	/// Gives a hint to the client on the best UI to use for editing.
	/// For example, "checkbox" is a good UI hint for booleanean parameter types.
	/// </summary>
	public context: string = "";

	constructor(kind: BehaviourParameterType, value: string, notes: string, context: string) {
		this.kind = kind;
		this.value = value;
		this.notes = notes;
		this.context = context;
	}
}