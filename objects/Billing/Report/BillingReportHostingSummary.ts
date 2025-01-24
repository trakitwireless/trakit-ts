
	/**
	 * Amount billed for a type of hosting (service or license) per target company.
	 */
	export class BillingReportHostingSummary {
		/**
		 * SKU being billed
		 */
		sku: string = "";
		/**
		 * Cost per billing cycle for this SKU.
		 */
		cost: double = NaN;
		/**
		 * Number of items for this SKU.
		 */
		count: double = NaN;
		/**
		 * Total amount being billed for this SKU.
		 */
		total: double = NaN;
	}