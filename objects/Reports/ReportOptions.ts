
	/// <summary>
	/// The options used by the report runner to process results.
	/// </summary>
	export class ReportOptions {
		/// <summary>
		/// A list of parameters to better shape the results.
		/// </summary>
		public parameters: ReportParameter[] = [];
		/// <summary>
		/// A targeting expression for including/excluding Assets.
		/// </summary>
		/// <override type="System.String" format="expression" />
		public targets: string = "";
		/// <summary>
		/// The mechanism to use for filtering based on places and regions.
		/// </summary>
		public filtering: ReportFilterMode;
		/// <summary>
		/// A targeting expression for limiting results which only include data from Assets interacting with the targeted Places.
		/// </summary>
		/// <override type="System.String" format="expression" />
		public places: string = "";
		/// <summary>
		/// A list of provinces and states, where only assets within those regions will be included in the results.
		/// </summary>
		public regions: string[] = [];
		/// <summary>
		/// Rules used to generate scorecard for this report.
		/// </summary>
		public scorecardRules: ReportScorecardRules;
	}