import { ISerializable } from '../API/Interfaces/ISerializable';
import { ReportParameterType } from './ReportParameterType';
import { JsonObject } from '../API/Types';

/**
 * An argument passed to the report runner.
 */
export class ReportParameter
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: JsonObject) {
		return new ReportParameter(
			json["kind"] as ReportParameterType,
			json["value"] as string,
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
		kind?: ReportParameterType,
		value?: string,
	) {
		this.kind = ReportParameterType[kind as ReportParameterType];
		this.value = value || "";
	}

	toJSON() {
		return {
			"kind": ReportParameterType[this.kind] || "",
			"value": this.value || "",
		};
	}
}