import { nothing } from 'objects/API/Types';
import { ARRAY_TO_JSON } from '../API/Arrays';
import { ISerializable } from '../API/Interfaces/ISerializable';
import { SearchPattern } from '../API/SearchPattern';
import { ReportFilterMode } from './ReportFilterMode';
import { ReportParameter } from './ReportParameter';
import { ReportScorecardRules } from './ReportScorecardRules';

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
			(json["parameters"] as any[])?.map(ReportParameter.fromJSON),
			SearchPattern.parse(json["targets"]),
			json["filtering"] as ReportFilterMode,
			SearchPattern.parse(json["places"]),
			json["regions"] as string[],
			json["scorecardRules"]
				? ReportScorecardRules.fromJSON(json["scorecardRules"])
				: null,
		);
	}
	
	/**
	 * A list of parameters to better shape the results.
	 */
	parameters: ReportParameter[];
	/**
	 * A targeting expression for including/excluding Assets.
	 */
	targets: SearchPattern[] | null;
	/**
	 * The mechanism to use for filtering based on places and regions.
	 */
	filtering: ReportFilterMode;
	/**
	 * A targeting expression for limiting results which only include data from Assets interacting with the targeted Places.
	 */
	places: SearchPattern[] | null;
	/**
	 * A list of provinces and states, where only assets within those regions will be included in the results.
	 */
	regions: string[];
	/**
	 * Rules used to generate scorecard for this report.
	 */
	scorecardRules: ReportScorecardRules | null;

	constructor(
		parameters?: ReportParameter[] | nothing,
		targets?: SearchPattern[] | nothing,
		filtering?: ReportFilterMode | nothing,
		places?: SearchPattern[] | nothing,
		regions?: string[] | nothing,
		scorecardRules?: ReportScorecardRules | nothing,
	) {
		this.parameters = parameters ?? [];
		this.targets = targets || null;
		this.filtering = ReportFilterMode[filtering as ReportFilterMode] || ReportFilterMode.none;
		this.places = places || null;
		this.regions = regions ?? [];
		this.scorecardRules = scorecardRules || null;
	}

	toJSON() {
		return {
			"parameters": this.parameters.map(ARRAY_TO_JSON),
			"targets": SearchPattern.stringify(this.targets),
			"filtering": ReportFilterMode[this.filtering] || ReportFilterMode.none,
			"places": SearchPattern.stringify(this.places),
			"regions": [...this.regions],
			"scorecardRules": this.scorecardRules?.toJSON() ?? null,
		};
	}
}