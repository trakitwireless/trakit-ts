


	/**
	 * Scorecard generated from the results of this report.
	 */
	export class ReportScorecard {
		/**
		 * The asset to which this scorecard belongs.
		 * {@link Asset.id}
		 */
		public asset: ulong = NaN;
		/**
		 * Final score calculated based on scorecard rules.
		 */
		public score: double = NaN;
		/**
		 * Points per rule
		 */
		public rulePoints: Map<string, double>;
	}