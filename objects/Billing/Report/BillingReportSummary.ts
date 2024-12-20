
	/// <summary>
	/// Summarized bill per target.
	/// </summary>
	export class BillingReportSummary implements INamed {
		/// <summary>
		/// The target company to which this summary instance belongs.
		/// </summary>
		/// <seealso cref="Company.id" />
		public target: ulong = NaN;
		/// <summary>
		/// The target company's parent.
		/// </summary>
		/// <seealso cref="Company.id" />
		public parent: ulong = NaN;
		/// <summary>
		/// Target's name.
		/// </summary>
		/// <override max-length="100" />
		public name: string = "";
		/// <summary>
		/// Notes about the target.
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// Summary contains totals per type of hosting (services and licenses) for this target
		/// </summary>
		public hosting: BillingReportHostingSummary[] = [];
	}