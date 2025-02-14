import { ISerializable } from '../API/Interfaces/ISerializable';
import { ReportParameterType } from './ReportParameterType';

/**
 * An argument passed to the report runner.
 */
export class ReportParameter
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: any) {
		return new ReportParameter(
			ReportParameterType[json["kind"] as ReportParameterType],
			json["value"]
		);
	}

	/**
	 * The type of argument.
	 */
	kind: ReportParameterType;
	/**
	 * The parsed value of the argument.  Each type of argument has a different parsing.
	 */
	value: string;

	constructor(
		kind: ReportParameterType,
		value: string
	) {
		this.kind = ReportParameterType[kind];
		this.value = value;
	}

	toJSON() {
		return {
			"kind": ReportParameterType[this.kind] || "",
			"value": this.value || "",
		};
	}
}