


	/// <summary>
	/// Scorecard generated from the results of this report.
	/// </summary>
	export class ReportScorecard {
		/// <summary>
		/// The asset to which this scorecard belongs.
		/// </summary>
		/// <seealso cref="Asset.id" />
		public asset: ulong = NaN;
		/// <summary>
		/// Final score calculated based on scorecard rules.
		/// </summary>
		public score: double = NaN;
		/// <summary>
		/// Points per rule
		/// </summary>
		public rulePoints: Map<string, double>;
	}