
	/**
	 * Description of a tiered SMS messaging limit
	 */
	export class BillableSmsProfile {
		/**
		 * The maximum number of messages sent per cycle
		 */
		public limit: uint = NaN;
		/**
		 * Cost per SMS message sent.
		 * Received messages are free.
		 */
		public amount: double = NaN;
	}