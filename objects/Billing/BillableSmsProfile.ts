
	/// <summary>
	/// Description of a tiered SMS messaging limit
	/// </summary>
	export class BillableSmsProfile {
		/// <summary>
		/// The maximum number of messages sent per cycle
		/// </summary>
		public limit: uint = NaN;
		/// <summary>
		/// Cost per SMS message sent.
		/// Received messages are free.
		/// </summary>
		public amount: double = NaN;
	}