import { ID, JSON_NUMBER, MAP_TO_JSON, JSON_TO_MAP } from "../API/Functions";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { JsonObject, ulong, ushort } from "../API/Types";

/**
 * Definition for load-balanced outbound SMS numbers for the White-labelling profile.
 */
export class NotificationServerSms
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: JsonObject) {
		return new NotificationServerSms(
			json["notifyLimit"] as ushort,
			JSON_TO_MAP(json["phoneNumbers"] as object || {}),
		);
	}
	
	/**
	 * A per-number/per-day limit on the amount of Notifications sent.
	 */
	notifyLimit: ushort = NaN;
	/**
	 * All phone numbers listed by the country (using two-digit ISO 3166-1 alpha-2 country codes) they each serve.
	 */
	phoneNumbers: Map<string, ulong[]> = new Map;

	constructor(
		notifyLimit?: ushort,
		phoneNumbers?: Map<string, ulong[]>,
	) {
		this.notifyLimit = ID(notifyLimit);
		this.phoneNumbers = phoneNumbers ?? new Map;
	}
	
	toJSON() {
		return {
			"notifyLimit": JSON_NUMBER(this.notifyLimit),
			"phoneNumbers": MAP_TO_JSON(this.phoneNumbers),
		};
	}
}