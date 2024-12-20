
	/// <summary>
	/// Rules used for generating a scorecard.
	/// </summary>
	export class ReportScorecardRules {
		/// <summary>
		/// Base score for the scorecard.
		/// </summary>
		public baseScore: double = NaN;
		/// <summary>
		/// Infraction parameters used to generate the final score
		/// </summary>
		public parameters: ReportScorecardParameter[] = [];
	}