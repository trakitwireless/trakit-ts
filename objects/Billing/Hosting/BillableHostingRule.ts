
	/// <summary>
	/// A billing rule for assets
	/// </summary>
	export class BillableHostingRule extends BillableHostingBase {
		/// <summary>
		/// The type of service being billed.
		/// </summary>
		public service: BillableHostingType;
	}