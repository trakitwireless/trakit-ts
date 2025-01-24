


	/**
	 * Scorecard generated from the results of this report.
	 */
	export class ReportScorecard {
		/**
		 * The asset to which this scorecard belongs.
		 * {@link Asset.id}
		 */
		asset: ulong = NaN;
		/**
		 * Final score calculated based on scorecard rules.
		 */
		score: double = NaN;
		/**
		 * Points per rule
		 */
		rulePoints: Map<string, double>;
	}