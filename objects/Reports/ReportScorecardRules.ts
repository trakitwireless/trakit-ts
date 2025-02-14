import { ARRAY_TO_JSON } from "../API/Arrays";
import { FLOAT } from "../API/Constants";
import { JSON_NUMBER } from "../API/Functions";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { double } from "../API/Types";
import { ReportScorecardParameter } from "./ReportScorecardParameter";

/**
 * Rules used for generating a scorecard.
 */
export class ReportScorecardRules
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: any) {
		return new ReportScorecardRules(
			FLOAT(json["baseScore"]),
			(json["parameters"] || []).map(ReportScorecardParameter.fromJSON),
		);
	}
	/**
	 * Base score for the scorecard.
	 */
	baseScore: double = NaN;
	/**
	 * Infraction parameters used to generate the final score
	 */
	parameters: ReportScorecardParameter[] = [];

	constructor(
		baseScore: double,
		parameters: ReportScorecardParameter[]
	) {
		this.baseScore = FLOAT(baseScore as any);
		this.parameters = parameters ?? [];
	}

	toJSON() {
		return {
			"baseScore": JSON_NUMBER(this.baseScore),
			"parameters": this.parameters?.map(ARRAY_TO_JSON),
		};
	}
}