
	/**
	 * Billing breakdown per target company.
	 */
	export class BillingReportBreakdown {
		/**
		 * The target company to which this breakdown instance belongs.
		 * {@link Company.id}
		 */
		public target: ulong = NaN;
		/**
		 * Individual amounts billed per targeted assets.
		 */
		public services: BillingReportServiceBreakdown[] = [];
		/**
		 * Individual amounts for licensing per targeted providers.
		 */
		public licenses: BillingReportLicenseBreakdown[] = [];
	}