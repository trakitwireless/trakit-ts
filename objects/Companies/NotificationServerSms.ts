

	/**
	 * Definition for load-balanced outbound SMS numbers for the White-labelling profile.
	 */
	export class NotificationServerSms {
		/**
		 * A per-number/per-day limit on the amount of Notifications sent.
		 */
		notifyLimit: ushort = NaN;
		/**
		 * All phone numbers listed by the country (	}