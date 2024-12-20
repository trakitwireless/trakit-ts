
	/// <summary>
	/// Billing breakdown per target company.
	/// </summary>
	export class BillingReportBreakdown {
		/// <summary>
		/// The target company to which this breakdown instance belongs.
		/// </summary>
		/// <seealso cref="Company.id" />
		public target: ulong = NaN;
		/// <summary>
		/// Individual amounts billed per targeted assets.
		/// </summary>
		public services: BillingReportServiceBreakdown[] = [];
		/// <summary>
		/// Individual amounts for licensing per targeted providers.
		/// </summary>
		public licenses: BillingReportLicenseBreakdown[] = [];
	}