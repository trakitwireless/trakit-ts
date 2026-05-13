import { BaseComponent } from "../API/BaseComponent";
import { BaseCompound } from "../API/BaseCompound";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IEnabled } from "../API/Interfaces/IEnabled";
import { IHavePermissions } from "../API/Interfaces/IHavePermissions";
import { IHavePreferences } from "../API/Interfaces/IHavePreferences";
import { Timezone } from "../API/Timezone";
import { codified, datetimetemplate, email, int, JsonObject, nothing, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { SESSIONS } from "../storage";
import { Contact } from "./Contact";
import { Permission } from "./Permissions/Permission";
import { SystemsOfUnits } from "./SystemsOfUnits";
import { UserAdvanced } from "./UserAdvanced";
import { UserAuthentication } from "./UserAuthentication";
import { UserGeneral } from "./UserGeneral";
import { UserGroup } from "./UserGroup";
import { UserMFA } from "./UserMFA";
import { UserNotifications } from "./UserNotifications";
import { UserState } from "./UserState";
import { UserSSO } from "./UserSSO";

/**
 * A grouping of credentials, information, preferences, and permissions for a person or machine to login to the system and access its resources.
 */
export class User
	extends BaseCompound
	implements IEnabled, IBelongCompany, IHavePermissions, IHavePreferences {
	/**
	 *  
	 */
	get pieces(): BaseComponent[] {
		return [
			this.#general,
			this.#advanced,
			this.#authentication,
			this.#state,
		];
	}

	/**
	 * The unique public email address used to access the system.
	 * {@link User.login}
	 */
	get login(): email {
		return this.#general.login
			?? this.#advanced.login
			?? this.#authentication.login
			?? this.#state.login;
	}
	/**
	 * The company to which this user belongs.
	 * {@link Company.id}
	 */
	get companyId(): ulong {
		return this.#general.companyId
			?? this.#advanced.companyId
			?? this.#authentication.companyId
			?? this.#state.companyId;
	}
	/**
	 * The {@link Company} to which this user belongs.
	 */
	get company(): Company {
		return this.#general.company
			?? this.#advanced.company
			?? this.#authentication.company
			?? this.#state.company;
	}

	#general: UserGeneral;
	/**
	 *  
	 */
	get general(): UserGeneral { return this.#general; }
	/**
	 * Indicates whether system access is disabled.
	 */
	get enabled(): boolean { return this.#general.enabled; }
	set enabled(value: boolean) { this.#general.enabled = value; }
	/**
	 * Human friendly name for these credentials
	 */
	get nickname(): string { return this.#general.nickname; }
	set nickname(value: string) { this.#general.nickname = value; }
	/**
	 * Contact information for this user.
	 * {@link Contact.id}
	 */
	get contactId(): ulong { return this.#general.contactId; }
	set contactId(value: ulong | nothing) { this.#general.contactId = value || NaN; }
	/**
	 * {@link Contact} information for this user.
	 */
	get contact(): Contact { return this.#general.contact; }
	set contact(value: Contact | nothing) { this.#general.contactId = value?.id || NaN; }
	/**
	 * The user's local timezone.
	 */
	get timezone(): Timezone { return this.#general.timezone; }
	set timezone(value: Timezone) { this.#general.timezone = value; }
	/**
	 * Preferred region/language for the UI and notifications.
	 * Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
	 */
	get language(): codified { return this.#general.language; }
	set language(value: codified) { this.#general.language = value; }
	/**
	 * The format strings defining the preferred way to display ambiguous values.
	 */
	get formats(): Map<codified, datetimetemplate> { return this.#general.formats; }
	set formats(value: Map<codified, datetimetemplate>) { this.#general.formats = value; }
	/**
	 * Preferred way of displaying ambiguous numbers in the context of measurements.
	 */
	get measurements(): Map<codified, SystemsOfUnits> { return this.#general.measurements; }
	set measurements(value: Map<codified, SystemsOfUnits>) { this.#general.measurements = value; }
	/**
	 * Definition of how and when to send alerts to the user.
	 */
	get notify(): UserNotifications[] { return this.#general.notify; }
	set notify(value: UserNotifications[]) { this.#general.notify = value; }

	#advanced: UserAdvanced;
	/**
	 *  
	 */
	get advanced(): UserAdvanced { return this.#advanced; }
	/**
	 * A list of {@link UserGroup}s to which this user belongs.
	 * {@link UserGroup.id}
	 */
	get groupIds(): ulong[] { return this.#advanced.groupIds; }
	set groupIds(value: ulong[]) { this.#advanced.groupIds = value; }
	/**
	 * A list of groups to which this user belongs.
	 */
	get groups(): UserGroup[] { return this.#advanced.groups; }
	set groups(value: UserGroup[]) { this.#advanced.groups = value; }
	/**
	 * Individual permission rules which override the group rules.
	 */
	get permissions(): Permission[] { return this.#advanced.permissions; }
	set permissions(value: Permission[]) { this.#advanced.permissions = value; }

	#authentication: UserAuthentication;
	/**
	 *  
	 */
	get authentication(): UserAuthentication { return this.#authentication; }
	/**
	 * Indicated whether the credentials have expired according to the company's policy.
	 */
	get passwordExpired(): boolean { return this.#authentication.passwordExpired; }
	set passwordExpired(value: boolean) { this.#authentication.passwordExpired = value; }
	/**
	 * Multi-factor authentication details for the user.
	 */
	get mfa(): UserMFA[] { return this.#authentication.mfa; }
	set mfa(value: UserMFA[]) { this.#authentication.mfa = value; }
	/**
	 * Single Sign-On details for the user.
	 */
	get sso(): UserSSO { return this.#authentication.sso; }
	set sso(value: UserSSO) { this.#authentication.sso = value; }

	#state: UserState;
	/**
	 * Additional options which do not fit in with the formats or measurements preferences.
	 */
	get options(): Map<codified, string> { return this.#state.options; }
	set options(value: Map<codified, string>) { this.#state.options = value; }

	constructor(json?: JsonObject | nothing) {
		super();
		this.#general = new UserGeneral;
		this.#advanced = new UserAdvanced;
		this.#authentication = new UserAuthentication;
		this.#state = new UserState;
		if (json) this.fromJSON(json);
	}
	override toJSON() {
		return {
			...this.#general.toJSON(),
			...this.#advanced.toJSON(),
			...this.#authentication.toJSON(),
			...this.#state.toJSON(),
			"v": [...this.v],
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const version = json?.["v"] as int[] || [],
			general = this.#general.fromJSON({ ...json, "v": version.slice(0, 1) }, force),
			advanced = this.#advanced.fromJSON({ ...json, "v": version.slice(1, 2) }, force),
			auth = this.#authentication.fromJSON({ ...json, "v": version.slice(2, 3) }, force),
			state = this.#state.fromJSON({ ...json, "v": version.slice(3, 4) }, force);
		return general || advanced || auth || state;
	}

	// IRequestable
	/**
	 * The {@link login} is the key.
	 */
	getKey() { return this.login; }

	/**
	 * A human friendly name for the user, used when displaying the user in the UI.
	 * Falls back to the {@link login} if no {@link nickname} or {@link contact} name is available.
	 * @returns 
	 */
	getName() {
		return this.nickname
			|| this.contact?.name
			|| this.login;
	}
	/**
	 * Retrieves all sessions associated with the user.
	 * @returns An array of sessions for the user.
	 */
	getSessions() {
		return [...SESSIONS.values().filter(s => s.login === this.login)];
	}
}