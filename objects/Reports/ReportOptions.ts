
	/**
	 * The options used by the report runner to process results.
	 */
	export class ReportOptions {
		/**
		 * A list of parameters to better shape the results.
		 */
		public parameters: ReportParameter[] = [];
		/**
		 * A targeting expression for including/excluding Assets.
		 *  <override type="System.String" format="expression" />
		 */
		public targets: string = "";
		/**
		 * The mechanism to use for filtering based on places and regions.
		 */
		public filtering: ReportFilterMode;
		/**
		 * A targeting expression for limiting results which only include data from Assets interacting with the targeted Places.
		 *  <override type="System.String" format="expression" />
		 */
		public places: string = "";
		/**
		 * A list of provinces and states, where only assets within those regions will be included in the results.
		 */
		public regions: string[] = [];
		/**
		 * Rules used to generate scorecard for this report.
		 */
		public scorecardRules: ReportScorecardRules;
	}