


	/// <summary>
	/// Report results which also include the computed summary and breakdown for the results.
	/// </summary>
	export class ReportResultData extends ReportResult {
		/// <summary>
		/// Grouped events form a summary instance, and contain information about the starting, ending, and number of the grouped events.
		/// </summary>
		public summary: Map<ulong, ReportSummary[]>;
		/// <summary>
		/// Individual events about the targeted assets used to calculate the results of the report.
		/// </summary>
		public breakdown: Map<ulong, ReportBreakdown[]>;
	}