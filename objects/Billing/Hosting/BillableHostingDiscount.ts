


	/// <summary>
	/// A discount rule for assets
	/// </summary>
	/// <override skip="true" />
	[Obsolete("Never implemented.")]
	export class BillableHostingDiscount extends BillableHostingBase {
		/// <summary>
		/// The type of services being discounted.
		/// </summary>
		public services: BillableHostingType[] = [];
		/// <summary>
		/// When true, the amount is used as a percentage value instead of a currency values.
		/// </summary>
		public percentage: boolean = false;
	}