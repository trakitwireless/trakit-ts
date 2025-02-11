import { ARRAY_TO_IDS } from "../API/Arrays";
import { BaseComponent } from "../API/BaseComponent";
import { CODIFY } from "../API/Codifier";
import { DATE, ID, IS_AN, MAP_TO_OBJECT, MAP_TO_OBJECT_PREDICATE, OBJECT_TO_MAP, OBJECT_TO_MAP_BY_PREDICATE } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { IPictured } from "../API/Interfaces/IPictured";
import { MAP_FILTERED_BY_KEYS } from "../API/Maps";
import { email, phone, ulong, url } from "../API/Types";
import { Company } from "../Companies/Company";
import { Picture } from "../Images/Picture";
import { COMPANIES, PICTURES } from "../Storage";

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
	 *  <override max-length="100" />
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
	 *  <override>
	 *  <values max-length="254" />
	 *  </override>
	 */
	otherNames: Map<string, string> = new Map;
	/**
	 * Email addresses.
	 * Use the object key like a name of the address.
	 * Example keys: Home, Work, Support, Old, etc.
	 *  <override>
	 *  <values max-length="254" format="email" />
	 *  </override>
	 */
	emails: Map<string, email> = new Map;
	/**
	 * Phone numbers.
	 * Use the object key like a name of the phone number.
	 * Example keys: Mobile, Fax, Home, Office, etc.
	 *  <override>
	 *  <values format="phone" />
	 *  </override>
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
	 *  <override>
	 *  <values type="System.String" max-length="254" format="url" />
	 *  </override>
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
	 *  <override format="codified" />
	 */
	roles: string[] = [];
	/**
	 * {@link Picture.id}s of this Contact.
	 */
	pictureIds: ulong[] = [];
	/**
	 * {@link Picture}s of this Contact.
	 */
	get pictures(): Picture[] {
		return MAP_FILTERED_BY_KEYS(PICTURES, this.pictureIds);
	}
	set pictures(values: Picture[]) {
		this.pictureIds = values?.map(ARRAY_TO_IDS) ?? [];
	}

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
			"v": this.v,
			"company": this.companyId,
			"name": this.name || "",
			"notes": this.notes || "",
			"otherNames": MAP_TO_OBJECT(this.otherNames),
			"emails": MAP_TO_OBJECT(this.emails),
			"phones": MAP_TO_OBJECT(this.phones),
			"addresses": MAP_TO_OBJECT(this.addresses),
			"urls": MAP_TO_OBJECT(this.urls),
			"dates": MAP_TO_OBJECT_PREDICATE(this.dates, (k, v) => [k, v.toISOString()]),
			"options": MAP_TO_OBJECT(this.options),
			"roles": [...this.roles],
			"pictures": [...this.pictureIds],
		};
	}
	override fromJSON(json: any): this {
		if (json) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			var keepers = this.updateVersions(json["v"]);
			if (keepers[0]) {
				this.name = json["name"] || "";
				this.notes = json["notes"] || "";
				this.emails = OBJECT_TO_MAP(json["emails"] || {}, false);
				this.phones = OBJECT_TO_MAP(json["phones"] || {}, false);
				this.addresses = OBJECT_TO_MAP(json["addresses"] || {}, false);
				this.urls = OBJECT_TO_MAP(json["urls"] || {}, false);
				this.dates = OBJECT_TO_MAP_BY_PREDICATE(json["dates"] || {}, (k, v) => [k, DATE(v)]);
				this.options = OBJECT_TO_MAP(json["options"] || {}, false);
				this.otherNames = OBJECT_TO_MAP(json["otherNames"] || {}, false);
				this.roles = (json["roles"] || []).map(CODIFY);
				this.pictureIds = (json["pictures"] || []).map(ID);
			}
		}
		return this;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}