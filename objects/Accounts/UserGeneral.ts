import { ARRAY_TO_JSON } from "../API/Arrays";
import { BaseComponent } from "../API/BaseComponent";
import { CODIFY } from "../API/Codifier";
import { ID, JSON_TO_MAP_PREDICATE, JSON_TO_MAP_KEY_CODIFIED, MAP_TO_JSON } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IEnabled } from "../API/Interfaces/IEnabled";
import { IHavePreferences } from "../API/Interfaces/IHavePreferences";
import { Timezone } from "../API/Timezone";
import { TIMEZONE_FIND } from "../API/Timezones";
import { JsonObject, codified, datetimetemplate, email, int, nothing, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { COMPANIES, CONTACTS } from "../storage";
import { Contact } from "./Contact";
import { SystemsOfUnits } from "./SystemsOfUnits";
import { User } from "./User";
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
	 */
	login: email = "";
	/**
	 * The company to which this user belongs.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The {@link Company} to which this user belongs.
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
	 */
	nickname: string = "";
	/**
	 * Contact information for this user.
	 * {@link Contact.id}
	 */
	contactId: ulong = NaN;
	/**
	 * {@link Contact} information for this user.
	 */
	get contact(): Contact { return CONTACTS.get(this.contactId) as Contact; }
	set contact(value: Contact) { this.contactId = value.id; }
	/**
	 * The user's local timezone.
	 * {@link Timezone.code}
	 */
	timezone: Timezone = Timezone.utc;
	/**
	 * Preferred region/language for the UI and notifications.
	 * Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
	 */
	language: codified = "";
	/**
	 * The format strings defining the preferred way to display ambiguous values.
	 */
	formats: Map<codified, datetimetemplate> = new Map;
	/**
	 * Preferred way of displaying ambiguous numbers in the context of measurements.
	 */
	measurements: Map<codified, SystemsOfUnits> = new Map;
	/**
	 * Additional options which do not fit in with the formats or measurements preferences.

	 */
	options: Map<codified, string> = new Map;
	/**
	 * Definition of how and when to send alerts to the user.
	 */
	notify: UserNotifications[] = [];

	constructor(json?: JsonObject | nothing) {
		super();
		if (json) this.fromJSON(json);
	}
	override toJSON() {
		return {
			"login": this.login.toLowerCase(),
			"v": [...this.v],
			"company": this.companyId,
			"nickname": this.nickname,
			"enabled": !!this.enabled,
			"contact": !!this.contactId,
			"passwordExpired": !!this.passwordExpired,
			"timezone": this.timezone?.code ?? Timezone.utc.code,
			"language": this.language,
			"formats": MAP_TO_JSON(this.formats),
			"measurements": MAP_TO_JSON(this.measurements),
			"options": MAP_TO_JSON(this.options),
			"notify": this.notify.map(ARRAY_TO_JSON),
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		if (update) {
			if (!this.login) this.login = (json["login"] as email || "").toLowerCase();
			this.companyId = ID(json["company"]);
			this.nickname = json["nickname"] as string || "";
			this.enabled = !!json["enabled"];
			this.contactId = ID(json["contact"]);
			this.passwordExpired = !!json["passwordExpired"];
			this.timezone = TIMEZONE_FIND(json["timezone"] as codified || "") || Timezone.utc;
			this.language = json["language"] as codified || "";
			this.formats = JSON_TO_MAP_KEY_CODIFIED(json["formats"] as object || {});
			this.measurements = JSON_TO_MAP_PREDICATE(json["measurements"] as object || {}, (k, v) => [CODIFY(k), SystemsOfUnits[v as SystemsOfUnits] ?? SystemsOfUnits.metric]);
			this.options = JSON_TO_MAP_KEY_CODIFIED(json["options"] as object || {});
			this.notify = (json["notify"] as JsonObject[] || []).map((notify: any) => UserNotifications.fromJSON(notify));
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link login} is the key.
	 */
	getKey() { return this.login; }
}