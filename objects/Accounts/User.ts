import { Component } from "../API/Component";
import { Compound } from "../API/Compound";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IEnabled } from "../API/Interfaces/IEnabled";
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
	implements IEnabled, IBelongCompany, IHavePreferences {
	/**
	 *  
	 */
	get pieces(): Component[] {
		return [
			this.General,
			this.Advanced,
		];
	}

	/**
	 * The unique public email address used to access the system.
	 * {@link User.login}
	 *  <override min-length="6" max-length="254" format="email" />
	 */
	get login(): string {
		return this.General?.login
			?? this.Advanced?.login;
	}
	/**
	 * The company to which this user belongs.
	 * {@link Company.id}
	 */
	get companyId(): ulong {
		return this.General?.companyId
			?? this.Advanced?.companyId;
	}
	/**
	 * The company to which this user belongs.
	 * {@link Company.id}
	 */
	get company(): Company {
		return this.General?.company;
	}


	/**
	 *  
	 */
	General: UserGeneral = new UserGeneral;
	/**
	 * Indicated whether the credentials have expired according to the company's policy.
	 */
	get passwordExpired(): boolean {
		return this.General?.passwordExpired;
	}
	set passwordExpired(value: boolean) {
		if (this.General) this.General.passwordExpired = value;
	}
	/**
	 * Indicates whether system access is disabled.
	 */
	get enabled(): boolean {
		return this.General?.enabled;
	}
	set enabled(value: boolean) {
		if (this.General) this.General.enabled = value;
	}
	/**
	 * Human friendly name for these credentials
	 *  <override max-length="100" />
	 */
	get nickname(): string {
		return this.General?.nickname;
	}
	set nickname(value: string) {
		if (this.General) this.General.nickname = value;
	}
	/**
	 * Contact information for this user.
	 * {@link Contact.id}
	 */
	get contactId(): ulong | null {
		return this.General?.contactId;
	}
	set contactId(value: ulong | null | undefined) {
		if (this.General) this.General.contactId = value ?? null;
	}
	/**
	 * Contact information for this user.
	 * {@link Contact.id}
	 */
	get contact(): Contact {
		return this.General?.contact;
	}
	set contact(value: Contact | null | undefined) {
		if (this.General) this.General.contactId = value?.id ?? null;
	}
	/**
	 * The user's local timezone.
	 * {@link Timezone.code}
	 */
	get timezone(): Timezone {
		return this.General?.timezone;
	}
	set timezone(value: Timezone) {
		if (this.General) this.General.timezone = value;
	}
	/**
	 * Preferred region/language for the UI and notifications.
	 * Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
	 *  <override min-length="2" max-length="5" format="codified" />
	 */
	get language(): string {
		return this.General?.language;
	}
	set language(value: string) {
		if (this.General) this.General.language = value;
	}
	/**
	 * The format strings defining the preferred way to display ambiguous values.
	 *  <override>
	 *  <keys format="codified" />
	 *  <values max-length="20" format="datetimetemplate" />
	 *  </override>
	 */
	get formats(): Map<codified, datetimetemplate> {
		return this.General?.formats;
	}
	set formats(value: Map<codified, datetimetemplate>) {
		if (this.General) this.General.formats = value;
	}
	/**
	 * Preferred way of displaying ambiguous numbers in the context of measurements.
	 *  <override>
	 *  <keys format="codified" />
	 *  </override>
	 */
	get measurements(): Map<codified, SystemsOfUnits> {
		return this.General?.measurements;
	}
	set measurements(value: Map<codified, SystemsOfUnits>) {
		if (this.General) this.General.measurements = value;
	}
	/**
	 * Additional options which do not fit in with the formats or measurements preferences.
	 *  <override>
	 *  <keys format="codified" />
	 *  <values max-length="20" />
	 *  </override>
	 */
	get options(): Map<codified, string> {
		return this.General?.options;
	}
	set options(value: Map<codified, string>) {
		if (this.General) this.General.options = value;
	}
	/**
	 * Definition of how and when to send alerts to the user.
	 *  <override max-count="7" />
	 */
	get notify(): UserNotifications[] {
		return this.General?.notify;
	}
	set notify(value: UserNotifications[]) {
		if (this.General) this.General.notify = value;
	}

	/**
	 *  
	 */
	Advanced: UserAdvanced = new UserAdvanced;
	/**
	 * A list of groups to which this user belongs.
	 * {@link UserGroup.id}
	 */
	get groupIds(): ulong[] {
		return this.Advanced?.groupIds;
	}
	set groupIds(value: ulong[]) {
		if (this.Advanced) this.Advanced.groupIds = value;
	}
	/**
	 * A list of groups to which this user belongs.
	 * {@link UserGroup.id}
	 */
	get groups(): UserGroup[] {
		return this.Advanced?.groups;
	}
	set groups(value: UserGroup[]) {
		if (this.Advanced) this.Advanced.groups = value;
	}
	/**
	 * Individual permission rules which override the group rules.
	 */
	get permissions(): Permission[] {
		return this.Advanced?.permissions;
	}
	set permissions(value: Permission[]) {
		if (this.Advanced) this.Advanced.permissions = value;
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