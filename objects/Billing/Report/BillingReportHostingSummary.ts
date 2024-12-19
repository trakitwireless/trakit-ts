
	/// <summary>
	/// Amount billed for a type of hosting (service or license) per target company.
	/// </summary>
	export class BillingReportHostingSummary {
		/// <summary>
		/// SKU being billed
		/// </summary>
		public sku: string = "";
		/// <summary>
		/// Cost per billing cycle for this SKU.
		/// </summary>
		public cost: double = NaN;
		/// <summary>
		/// Number of items for this SKU.
		/// </summary>
		public count: double = NaN;
		/// <summary>
		/// Total amount being billed for this SKU.
		/// </summary>
		public total: double = NaN;
	}