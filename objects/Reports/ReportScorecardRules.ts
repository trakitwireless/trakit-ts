
	/**
	 * Rules used for generating a scorecard.
	 */
	export class ReportScorecardRules {
		/**
		 * Base score for the scorecard.
		 */
		baseScore: double = NaN;
		/**
		 * Infraction parameters used to generate the final score
		 */
		parameters: ReportScorecardParameter[] = [];
	}