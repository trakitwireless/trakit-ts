import { ID, MAP_TO_OBJECT, OBJECT_TO_MAP } from "../API/Functions";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { ulong, ushort } from "../API/Types";

/**
 * Definition for load-balanced outbound SMS numbers for the White-labelling profile.
 */
export class NotificationServerSms
	implements ISerializable {
	/**
	 * A per-number/per-day limit on the amount of Notifications sent.
	 */
	notifyLimit: ushort = NaN;
	/**
	 * All phone numbers listed by the country (using two-digit ISO 3166-1 alpha-2 country codes) they each serve.
	 */
	phoneNumbers: Map<string, ulong[]> = new Map;

	constructor(json?: any) {
		if (json) {
			this.notifyLimit = ID(json["notifyLimit"]);
			this.phoneNumbers = OBJECT_TO_MAP(json["phoneNumbers"] || {})
		}
	}
	
	toJSON() {
		return {
			"notifyLimit": this.notifyLimit || null,
			"phoneNumbers": MAP_TO_OBJECT(this.phoneNumbers),
		};
	}
}