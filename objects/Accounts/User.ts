import { Component } from "../API/Component";
import { Compound } from "../API/Compound";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IEnabled } from "../API/Interfaces/IEnabled";
import { IHavePermissions } from "../API/Interfaces/IHavePermissions";
import { IHavePreferences } from "../API/Interfaces/IHavePreferences";
import { Timezone } from "../API/Timezone";
import { codified, datetimetemplate, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { Contact } from "./Contact";
import { Permission } from "./Permissions/Permission";
import { SystemsOfUnits } from "./SystemsOfUnits";
import { UserAdvanced } from "./UserAdvanced";
import { UserGeneral } from "./UserGeneral";
import { UserGroup } from "./UserGroup";
import { UserNotifications } from "./UserNotifications";


/**
 * A grouping of credentials, information, preferences, and permissions for a person or machine to login to the system and access its resources.
 */
export class User
	extends Compound
	implements IEnabled, IBelongCompany, IHavePermissions, IHavePreferences {
	/**
	 *  
	 */
	get pieces(): Component[] {
		return [
			this.general,
			this.advanced,
		];
	}

	/**
	 * The unique public email address used to access the system.
	 * {@link User.login}
	 *  <override min-length="6" max-length="254" format="email" />
	 */
	get login(): string {
		return this.general.login
			?? this.advanced.login;
	}
	/**
	 * The company to which this user belongs.
	 * {@link Company.id}
	 */
	get companyId(): ulong {
		return this.general.companyId
			?? this.advanced.companyId;
	}
	/**
	 * The company to which this user belongs.
	 * {@link Company.id}
	 */
	get company(): Company {
		return this.general.company;
	}


	/**
	 *  
	 */
	general: UserGeneral = new UserGeneral;
	/**
	 * Indicated whether the credentials have expired according to the company's policy.
	 */
	get passwordExpired(): boolean {
		return this.general.passwordExpired;
	}
	set passwordExpired(value: boolean) {
		this.general.passwordExpired = value;
	}
	/**
	 * Indicates whether system access is disabled.
	 */
	get enabled(): boolean {
		return this.general.enabled;
	}
	set enabled(value: boolean) {
		this.general.enabled = value;
	}
	/**
	 * Human friendly name for these credentials
	 *  <override max-length="100" />
	 */
	get nickname(): string {
		return this.general.nickname;
	}
	set nickname(value: string) {
		this.general.nickname = value;
	}
	/**
	 * Contact information for this user.
	 * {@link Contact.id}
	 */
	get contactId(): ulong | null {
		return this.general.contactId;
	}
	set contactId(value: ulong | null | undefined) {
		this.general.contactId = value ?? null;
	}
	/**
	 * Contact information for this user.
	 * {@link Contact.id}
	 */
	get contact(): Contact {
		return this.general.contact;
	}
	set contact(value: Contact | null | undefined) {
		this.general.contactId = value?.id ?? null;
	}
	/**
	 * The user's local timezone.
	 * {@link Timezone.code}
	 */
	get timezone(): Timezone {
		return this.general.timezone;
	}
	set timezone(value: Timezone) {
		this.general.timezone = value;
	}
	/**
	 * Preferred region/language for the UI and notifications.
	 * Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
	 *  <override min-length="2" max-length="5" format="codified" />
	 */
	get language(): string {
		return this.general.language;
	}
	set language(value: string) {
		this.general.language = value;
	}
	/**
	 * The format strings defining the preferred way to display ambiguous values.
	 *  <override>
	 *  <keys format="codified" />
	 *  <values max-length="20" format="datetimetemplate" />
	 *  </override>
	 */
	get formats(): Map<codified, datetimetemplate> {
		return this.general.formats;
	}
	set formats(value: Map<codified, datetimetemplate>) {
		this.general.formats = value;
	}
	/**
	 * Preferred way of displaying ambiguous numbers in the context of measurements.
	 *  <override>
	 *  <keys format="codified" />
	 *  </override>
	 */
	get measurements(): Map<codified, SystemsOfUnits> {
		return this.general.measurements;
	}
	set measurements(value: Map<codified, SystemsOfUnits>) {
		this.general.measurements = value;
	}
	/**
	 * Additional options which do not fit in with the formats or measurements preferences.
	 *  <override>
	 *  <keys format="codified" />
	 *  <values max-length="20" />
	 *  </override>
	 */
	get options(): Map<codified, string> {
		return this.general.options;
	}
	set options(value: Map<codified, string>) {
		this.general.options = value;
	}
	/**
	 * Definition of how and when to send alerts to the user.
	 *  <override max-count="7" />
	 */
	get notify(): UserNotifications[] {
		return this.general.notify;
	}
	set notify(value: UserNotifications[]) {
		this.general.notify = value;
	}

	/**
	 *  
	 */
	advanced: UserAdvanced = new UserAdvanced;
	/**
	 * A list of groups to which this user belongs.
	 * {@link UserGroup.id}
	 */
	get groupIds(): ulong[] {
		return this.advanced.groupIds;
	}
	set groupIds(value: ulong[]) {
		this.advanced.groupIds = value;
	}
	/**
	 * A list of groups to which this user belongs.
	 * {@link UserGroup.id}
	 */
	get groups(): UserGroup[] {
		return this.advanced.groups;
	}
	set groups(value: UserGroup[]) {
		this.advanced.groups = value;
	}
	/**
	 * Individual permission rules which override the group rules.
	 */
	get permissions(): Permission[] {
		return this.advanced.permissions;
	}
	set permissions(value: Permission[]) {
		this.advanced.permissions = value;
	}

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