


	/**
	 * A discount rule for assets
	 *  <override skip="true" />
	 * @deprecated Never implemented.
	 */
	export class BillableHostingDiscount extends BillableHostingBase {
		/**
		 * The type of services being discounted.
		 */
		public services: BillableHostingType[] = [];
		/**
		 * When true, the amount is used as a percentage value instead of a currency values.
		 */
		public percentage: boolean = false;
	}