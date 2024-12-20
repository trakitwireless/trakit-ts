


	/// <summary>
	/// Infraction parameter used to generate scorecard
	/// </summary>
	export class ReportScorecardParameter {
		/// <summary>
		/// Type of exception, example speeding, idling, etc.
		/// </summary>
		public condition: string = "";
		/// <summary>
		/// Threshold per instance. If the threshold is 0, each instance is used in the calculation
		/// </summary>
		public duration: TimeSpan;
		/// <summary>
		/// Points applied against the base score per instance
		/// </summary>
		public points: double = NaN;
	}