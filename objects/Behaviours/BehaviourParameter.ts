import { ISerializable } from "../API/Interfaces/ISerializable";
import { BehaviourParameterType } from "./BehaviourParameterType";

/**
 * Definition of an argument passed to a Behaviour Script.
*/
export class BehaviourParameter
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 * @returns 
	 */
	static fromJSON(json: any) {
		return new BehaviourParameter(
			BehaviourParameterType[(json["kind"] || json["type"]) as BehaviourParameterType],
			json["value"],
			json["notes"],
			json["context"]
		);
	}
	/**
	 * Simple type information for the compiler.
	 */
	kind: BehaviourParameterType;
	/**
	 * The value is given as a string, but parsed into native type when compiled.
	 */
	value: string;
	/**
	 * Usage notes.
	 */
	notes: string;
	/**
	 * Gives a hint to the client on the best UI to use for editing.
	 * For example, "checkbox" is a good UI hint for boolean parameter types.
	 */
	context: string;

	constructor(
		kind?: BehaviourParameterType,
		value?: string,
		notes?: string,
		context?: string
	) {
		this.kind = BehaviourParameterType[kind as BehaviourParameterType] || BehaviourParameterType.text;
		this.value = value || "";
		this.notes = notes || "";
		this.context = context || "";
	}

	toJSON() {
		return {
			"kind": BehaviourParameterType[this.kind] || BehaviourParameterType.text,
			"value": this.value || "",
			"notes": this.notes || "",
			"context": this.context || ""
		};
	}
}