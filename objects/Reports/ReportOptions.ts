import { ReportParameter } from './ReportParameter';
import { ReportScorecardRules } from './ReportScorecardRules';
import { ReportFilterMode } from './ReportFilterMode';

/**
 * The options used by the report runner to process results.
 */
export class ReportOptions {
	/**
	 * A list of parameters to better shape the results.
	 */
	parameters: ReportParameter[] = [];
	/**
	 * A targeting expression for including/excluding Assets.
	 *  <override type="System.String" format="expression" />
	 */
	targets: string = "";
	/**
	 * The mechanism to use for filtering based on places and regions.
	 */
	filtering: ReportFilterMode;
	/**
	 * A targeting expression for limiting results which only include data from Assets interacting with the targeted Places.
	 *  <override type="System.String" format="expression" />
	 */
	places: string = "";
	/**
	 * A list of provinces and states, where only assets within those regions will be included in the results.
	 */
	regions: string[] = [];
	/**
	 * Rules used to generate scorecard for this report.
	 */
	scorecardRules: ReportScorecardRules;
}