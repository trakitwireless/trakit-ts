import { ARRAY_TO_JSON } from "../API/Arrays";
import { BaseComponent } from "../API/BaseComponent";
import { CODIFY } from "../API/Codifier";
import { ID, MAP_TO_OBJECT, OBJECT_TO_MAP_BY_PREDICATE, OBJECT_TO_MAP_KEY_CODIFIED } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IEnabled } from "../API/Interfaces/IEnabled";
import { IHavePreferences } from "../API/Interfaces/IHavePreferences";
import { Timezone } from "../API/Timezone";
import { TIMEZONE_FIND } from "../API/Timezones";
import { ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { COMPANIES } from "../Storage";
import { Contact } from "./Contact";
import { SystemsOfUnits } from "./SystemsOfUnits";
import { UserNotifications } from "./UserNotifications";

/**
 * Credentials, information, and preferences about a user.
 */
export class UserGeneral
	extends BaseComponent
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
	
	/**
	 * The company to which this user belongs.
	 * {@link Company}
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
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
	notifications: UserNotifications[] = [];

	override toJSON() {
		return {
			"login": this.login.toLowerCase(),
			"v": this.v,
			"company": this.companyId,
			"nickname": this.nickname,
			"enabled": !!this.enabled,
			"contact": !!this.contactId,
			"passwordExpired": !!this.passwordExpired,
			"timezone": this.timezone?.code ?? Timezone.utc.code,
			"language": this.language,
			"formats": MAP_TO_OBJECT(this.formats),
			"measurements": MAP_TO_OBJECT(this.measurements),
			"options": MAP_TO_OBJECT(this.options),
			"notify": this.notifications.map(ARRAY_TO_JSON),
		};
	}
	override fromJSON(json: any): this {
		if (json) {
			if (!this.login) this.login = (json["login"] || "").toLowerCase();
			var keepers = this.updateVersions(json["v"]);
			if (keepers[0]) {
				this.nickname = json["nickname"] || "";
				this.enabled = !!json["enabled"];
				this.contactId = ID(json["contact"]);
				this.passwordExpired = !!json["passwordExpired"];
				this.timezone = TIMEZONE_FIND(json["timezone"] || "") || Timezone.utc;
				this.language = json["language"] || "";
				this.formats = OBJECT_TO_MAP_KEY_CODIFIED(json["formats"] || {});
				this.measurements = OBJECT_TO_MAP_BY_PREDICATE(json["measurements"] || {}, (k, v) => [CODIFY(k), SystemsOfUnits[v as SystemsOfUnits] ?? SystemsOfUnits.metric]);
				this.options = OBJECT_TO_MAP_KEY_CODIFIED(json["options"] || {});
				this.notifications = (json["notify"] || []).map((notify: any) => new UserNotifications(notify));
			}
		}
		return this;
	}

	// IRequestable
	/**
	 * The {@link login} is the key.
	 */
	getKey(): string { return this.login; }
}