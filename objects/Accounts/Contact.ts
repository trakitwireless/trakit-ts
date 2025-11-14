import { ARRAY_TO_IDS } from "../API/Arrays";
import { BaseComponent } from "../API/BaseComponent";
import { CODIFY } from "../API/Codifier";
import { DATE, ID, IS_AN, JSON_TO_MAP, JSON_TO_MAP_PREDICATE, MAP_TO_JSON } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { IPictured } from "../API/Interfaces/IPictured";
import { MAP_FILTERED_BY_KEYS } from "../API/Maps";
import { codified, datetime, email, int, JsonObject, phone, ulong, url } from "../API/Types";
import { Company } from "../Companies/Company";
import { Picture } from "../Images/Picture";
import { COMPANIES, PICTURES } from "../storage";

/**
 * Key names used for legacy getters/setters.
 */
const CONTACT_KEY_EMAIL = "Email",
	CONTACT_KEY_CELL = "Mobile",
	CONTACT_KEY_OFFICE = "Office",
	CONTACT_KEY_FAX = "Fax",
	CONTACT_KEY_ADDRESS = "Address",
	CONTACT_KEY_WWW = "Website";

/**
 * Contact information.
 */
export class Contact
	extends BaseComponent
	implements IIdUlong, INamed, IBelongCompany, IPictured {
	/**
	 * Unique identifier of this contact.
	 */
	id: ulong = NaN;
	/**
	 * The company to which this contact belongs
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The company to which this contact belongs
	 * {@link Company.id}
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * The person's name
	 */
	name: string = "";
	/**
	 * Notes about this person.
	 */
	notes: string = "";
	/**
	 * A collection of other names this person might go by.
	 * Use the object key like a name identifier.
	 * Example keys: Initials, Nickname, Maiden Name, etc.
	 */
	otherNames: Map<string, string> = new Map;
	/**
	 * Email addresses.
	 * Use the object key like a name of the address.
	 * Example keys: Home, Work, Support, Old, etc.
	 */
	emails: Map<string, email> = new Map;
	/**
	 * Phone numbers.
	 * Use the object key like a name of the phone number.
	 * Example keys: Mobile, Fax, Home, Office, etc.
	 */
	phones: Map<string, phone> = new Map;
	/**
	 * Mailing addresses.
	 * Use the object key like a name of the address.
	 * Example keys: Home, Work, Park, etc.
	 */
	addresses: Map<string, string> = new Map;
	/**
	 * Websites and other online resources.
	 * Use the object key like a name of the address.
	 * Example keys: Downloads, Support, FTP, etc.
	 */
	urls: Map<string, url> = new Map;
	/**
	 * Date information.
	 * Use the object key like a name of the date.
	 * Example keys: Birthday, Started Date, Retired On, etc.
	 */
	dates: Map<string, Date> = new Map;
	/**
	 * Uncategorized information.
	 * Use the object keys and values however you'd like.
	 */
	options: Map<string, string> = new Map;
	/**
	 * A list of roles they play in the Company.
	 */
	roles: codified[] = [];
	/**
	 * {@link Picture.id}s of this Contact.
	 */
	pictureIds: ulong[] = [];
	/**
	 * {@link Picture}s of this Contact.
	 */
	get pictures(): Picture[] { return MAP_FILTERED_BY_KEYS(PICTURES, this.pictureIds); }
	set pictures(values: Picture[]) { this.pictureIds = values?.map(ARRAY_TO_IDS) ?? []; }

	//#region Legacy/Deprecated
	/**
	 * Primary email address.
	 */
	get email(): email {
		return this.emails.get(CONTACT_KEY_EMAIL) ?? "";
	}
	set email(value: email) {
		value
			? this.emails.set(CONTACT_KEY_EMAIL, value)
			: this.emails.delete(CONTACT_KEY_EMAIL);
	}
	/**
	 * A cellular phone number.
	 */
	get mobile(): phone {
		return this.phones.get(CONTACT_KEY_CELL) ?? NaN;
	}
	set mobile(value: phone) {
		value
			? this.phones.set(CONTACT_KEY_CELL, value)
			: this.phones.delete(CONTACT_KEY_CELL);
	}
	/**
	 * A workplace landline phone number.
	 */
	get office(): phone {
		return this.phones.get(CONTACT_KEY_OFFICE) ?? NaN;
	}
	set office(value: phone) {
		value
			? this.phones.set(CONTACT_KEY_OFFICE, value)
			: this.phones.delete(CONTACT_KEY_OFFICE);
	}
	/**
	 * Why can't we get rid of these damn machines?
	 */
	get fax(): phone {
		return this.phones.get(CONTACT_KEY_FAX) ?? NaN;
	}
	set fax(value: phone) {
		value
			? this.phones.set(CONTACT_KEY_FAX, value)
			: this.phones.delete(CONTACT_KEY_FAX);
	}
	/**
	 * Primary email address.
	 */
	get address(): string {
		return this.addresses.get(CONTACT_KEY_ADDRESS) ?? "";
	}
	set address(value: string) {
		value
			? this.addresses.set(CONTACT_KEY_ADDRESS, value)
			: this.addresses.delete(CONTACT_KEY_ADDRESS);
	}
	/**
	 * Website.
	 */
	get url(): url {
		return this.urls.get(CONTACT_KEY_WWW) ?? "";
	}
	set url(value: url) {
		value
			? this.urls.set(CONTACT_KEY_WWW, value)
			: this.urls.delete(CONTACT_KEY_WWW);
	}
	//#endregion Legacy/Deprecated
	
	override toJSON() {
		return {
			"id": this.id || null,
			"v": [...this.v],
			"company": this.companyId,
			"name": this.name || "",
			"notes": this.notes || "",
			"otherNames": MAP_TO_JSON(this.otherNames),
			"emails": MAP_TO_JSON(this.emails),
			"phones": MAP_TO_JSON(this.phones),
			"addresses": MAP_TO_JSON(this.addresses),
			"urls": MAP_TO_JSON(this.urls),
			"dates": MAP_TO_JSON(this.dates),
			"options": MAP_TO_JSON(this.options),
			"roles": [...this.roles],
			"pictures": [...this.pictureIds],
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json["v"] as int[]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.name = json["name"] as string || "";
			this.notes = json["notes"] as string || "";
			this.emails = JSON_TO_MAP(json["emails"] as { [key: string]: email } || {}, false);
			this.phones = JSON_TO_MAP(json["phones"] as { [key: string]: phone } || {}, false);
			this.addresses = JSON_TO_MAP(json["addresses"] as { [key: string]: string } || {}, false);
			this.urls = JSON_TO_MAP(json["urls"] as { [key: string]: url } || {}, false);
			this.dates = JSON_TO_MAP_PREDICATE(json["dates"] as { [key: string]: datetime } || {}, (k, v) => [k, DATE(v)]);
			this.options = JSON_TO_MAP(json["options"] as { [key: string]: string } || {}, false);
			this.otherNames = JSON_TO_MAP(json["otherNames"] as { [key: string]: string } || {}, false);
			this.roles = (json["roles"] as string[])?.map(CODIFY) ?? [];
			this.pictureIds = (json["pictures"] as string[])?.map(ID) ?? [];
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey() { return this.id; }
}