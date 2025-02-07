import { ulong, ushort } from "../API/Types";

/**
 * Definition for load-balanced outbound SMS numbers for the White-labelling profile.
 */
export class NotificationServerSms {
	/**
	 * A per-number/per-day limit on the amount of Notifications sent.
	 */
	notifyLimit: ushort = NaN;
	/**
	 * All phone numbers listed by the country (using two-digit ISO 3166-1 alpha-2 country codes) they each serve.
	 */
	phoneNumbers: Map<string, ulong[]> = new Map;
}