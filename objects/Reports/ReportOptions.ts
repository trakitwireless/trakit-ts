import { ReportParameter } from './ReportParameter';
import { ReportScorecardRules } from './ReportScorecardRules';
import { ReportFilterMode } from './ReportFilterMode';
import { ISerializable } from '../API/Interfaces/ISerializable';
import { ARRAY_TO_JSON } from '../API/Arrays';
import { expression } from '../API/Types';

/**
 * The options used by the report runner to process results.
 */
export class ReportOptions
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: any) {
		return new ReportOptions(
			(json["parameters"] as any[]).map(ReportParameter.fromJSON),
			json["targets"] || "",
			ReportFilterMode[json["filtering"] as ReportFilterMode],
			json["places"] || "",
			json["regions"] as any[],
			json["scorecardRules"]
				? ReportScorecardRules.fromJSON(json["scorecardRules"])
				: null
		);
	}
	
	/**
	 * A list of parameters to better shape the results.
	 */
	parameters: ReportParameter[] = [];
	/**
	 * A targeting expression for including/excluding Assets.
	 */
	targets: expression = "";
	/**
	 * The mechanism to use for filtering based on places and regions.
	 */
	filtering: ReportFilterMode;
	/**
	 * A targeting expression for limiting results which only include data from Assets interacting with the targeted Places.
	 */
	places: expression = "";
	/**
	 * A list of provinces and states, where only assets within those regions will be included in the results.
	 */
	regions: string[] = [];
	/**
	 * Rules used to generate scorecard for this report.
	 */
	scorecardRules: ReportScorecardRules | null;

	constructor(
		parameters?: ReportParameter[],
		targets?: string,
		filtering?: ReportFilterMode,
		places?: string,
		regions?: string[],
		scorecardRules?: ReportScorecardRules | null
	) {
		this.parameters = parameters ?? [];
		this.targets = targets || "";
		this.filtering = ReportFilterMode[filtering as ReportFilterMode] || ReportFilterMode.none;
		this.places = places || "";
		this.regions = regions ?? [];
		this.scorecardRules = scorecardRules || null;
	}

	toJSON() {
		return {
			"parameters": this.parameters?.map(ARRAY_TO_JSON) ?? [],
			"targets": this.targets || "",
			"filtering": ReportFilterMode[this.filtering] || ReportFilterMode.none,
			"places": this.places || "",
			"regions": [...this.regions],
			"scorecardRules": this.scorecardRules?.toJSON() ?? null,
		};
	}
}