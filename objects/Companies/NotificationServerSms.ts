

	/// <summary>
	/// Definition for load-balanced outbound SMS numbers for the White-labelling profile.
	/// </summary>
	export class NotificationServerSms {
		/// <summary>
		/// A per-number/per-day limit on the amount of Notifications sent.
		/// </summary>
		public notifyLimit: ushort = NaN;
		/// <summary>
		/// All phone numbers listed by the country (	}