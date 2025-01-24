
	/**
	 * Amount billed for a type of hosting (service or license) per target company.
	 */
	export class BillingReportHostingSummary {
		/**
		 * SKU being billed
		 */
		public sku: string = "";
		/**
		 * Cost per billing cycle for this SKU.
		 */
		public cost: double = NaN;
		/**
		 * Number of items for this SKU.
		 */
		public count: double = NaN;
		/**
		 * Total amount being billed for this SKU.
		 */
		public total: double = NaN;
	}