import { Component } from "../API/Component";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IEnabled } from "../API/Interfaces/IEnabled";
import { IHavePreferences } from "../API/Interfaces/IHavePreferences";
import { Timezone } from "../API/Timezone";
import { ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { Contact } from "./Contact";
import { SystemsOfUnits } from "./SystemsOfUnits";
import { UserNotifications } from "./UserNotifications";

/**
 * Credentials, information, and preferences about a user.
 */
export class UserGeneral
	extends Component
	implements IEnabled, IBelongCompany, IHavePreferences {
	/**
	 * The unique public email address used to access the system.
	 * {@link User.login}
	 *  <override min-length="6" max-length="254" format="email" />
	 */
	login: string = "";
	/**
	 * The company to which this user belongs.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	get company(): Company {
		throw new Error("Method not implemented.");
	}
	set company(value: Company) {
		this.companyId = value.id;
	}
	/**
	 * Indicated whether the credentials have expired according to the company's policy.
	 */
	passwordExpired: boolean = false;
	/**
	 * Indicates whether system access is disabled.
	 */
	enabled: boolean = false;
	/**
	 * Human friendly name for these credentials
	 *  <override max-length="100" />
	 */
	nickname: string = "";
	/**
	 * Contact information for this user.
	 * {@link Contact.id}
	 */
	contactId: ulong | null = NaN;
	/**
	 * Contact information for this user.
	 * {@link Contact.id}
	 */
	get contact(): Contact {
		throw new Error;
	}
	set contact(value: Contact) {
		this.contactId = value.id;
	}
	/**
	 * The user's local timezone.
	 * {@link Timezone.code}
	 */
	timezone: Timezone = Timezone.utc;
	/**
	 * Preferred region/language for the UI and notifications.
	 * Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
	 *  <override min-length="2" max-length="5" format="codified" />
	 */
	language: string = "";
	/**
	 * The format strings defining the preferred way to display ambiguous values.
	 *  <override>
	 *  <keys format="codified" />
	 *  <values max-length="20" format="datetimetemplate" />
	 *  </override>
	 */
	formats: Map<string, string> = new Map;
	/**
	 * Preferred way of displaying ambiguous numbers in the context of measurements.
	 *  <override>
	 *  <keys format="codified" />
	 *  </override>
	 */
	measurements: Map<string, SystemsOfUnits> = new Map;
	/**
	 * Additional options which do not fit in with the formats or measurements preferences.
	 *  <override>
	 *  <keys format="codified" />
	 *  <values max-length="20" />
	 *  </override>
	 */
	options: Map<string, string> = new Map;
	/**
	 * Definition of how and when to send alerts to the user.
	 *  <override max-count="7" />
	 */
	notify: UserNotifications[] = [];

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
	 * The {@link login} is the key.
	 */
	getKey(): string { return this.login; }
}