import { Component } from "../API/Component";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { IPictured } from "../API/Interfaces/IPictured";
import { ulong, url } from "../API/Types";
import { Company } from "../Companies/Company";

/**
 * Contact information.
 */
export class Contact
	extends Component
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
	get company(): Company {
		throw new Error("Method not implemented.");
	}
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
	emails: Map<string, string> = new Map;
	/**
	 * Phone numbers.
	 * Use the object key like a name of the phone number.
	 * Example keys: Mobile, Fax, Home, Office, etc.
	 *  <override>
	 *  <values format="phone" />
	 *  </override>
	 */
	phones: Map<string, ulong> = new Map;
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
	 * Pictures of this Contact.
	 * {@link Picture.id}
	 */
	pictures: ulong[] = [];

	constructor(json: any = null) {
		super();
		if (json) this.fromJSON(json);
	}
	override toJSON() {
		throw new Error("Method not implemented.");
	}
	override fromJSON(json: any): void {
		throw new Error("Method not implemented.");
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}