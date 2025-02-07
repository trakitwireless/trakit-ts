import { Component, } from '../API/Component';
import { DATE } from '../API/Functions';
import { IBelongCompany, } from '../API/Interfaces/IBelongCompany';
import { IEnabled, } from '../API/Interfaces/IEnabled';
import { IHavePermissions, } from '../API/Interfaces/IHavePermissions';
import { IHavePreferences, } from '../API/Interfaces/IHavePreferences';
import { Timezone } from '../API/Timezone';
import { codified, ulong, url } from '../API/Types';
import { Company } from '../Companies/Company';
import { Permission } from './Permissions/Permission';
import { SystemsOfUnits } from './SystemsOfUnits';
import { UserGroup } from './UserGroup';

/**
 * A service account that allowes for API access of system services.
 */
export class Machine
	extends Component
	implements IEnabled, IBelongCompany, IHavePreferences, IHavePermissions {
	/**
	 * The unique idenifier used to access the system.
	 */
	key: string = "";
	/**
	 * The company to which this user belongs.
	 */
	companyId: ulong = NaN;
	/**
	 * 
	 */
	get company(): Company {
		throw new Error('Method not implemented.');
	}
	/**
	 * Indicates whether system access is disable.
	 */
	enabled: boolean = false;
	/**
	 * A token used to encode or validate requests.
	 */
	secret: string | null = null;
	/**
	 * Human friendly name for these credentials
	 */
	nickname: string = "";
	/**
	 * Notes about this machine.
	 */
	notes: string = "";
	/**
	 * An optional timestamp that restricts this machine account from being used before the given date.
	 */
	notBefore: Date = DATE();
	/**
	 * An optional timestamp that restricts this machine account from being used after the given date.
	 */
	notAfter: Date = DATE();
	/**
	 * The service account's local timezone.
	 */
	timezone: Timezone = Timezone.utc;
	/**
	 * Preferred region/language for the UI and notifications.
	 * Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
	 */
	language: string = "";
	/**
	 * The format strings defining the preferred way to display ambiguous values.
	 */
	formats: Map<codified, string> = new Map;
	/**
	 * Preferred way of displaying ambiguous numbers in the context of measurements.
	 */
	measurements: Map<string, SystemsOfUnits> = new Map;
	/**
	 * Additional options which do not fit in with the formats or measurements preferences.
	 */
	options: Map<string, string> = new Map;

	/**
	 * A list of groups to which this machine account belongs.
	 */
	groups: UserGroup[] = [];
	/**
	 * Permission rules which override the group rules.
	 */
	permissions: Permission[] = [];
	/**
	 * List of system service URIs that this machine account is permitted to access.
	 */
	services: url[] = [];
	/**
	 * Optional list of your managed domains from which this machine account can be used.
	 */
	referrers: url[] = [];
	/**
	 * Restrict service access to only the provided IP ranges.
	 * Currently we only support IPv4 ranges
	 * When true, no access restrictions ({@link secret}, {@link referrers}, or {@link ipRanges}) are enforced.
	 */
	insecure: boolean = false;

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
	 * The {@link key} is the key (how about that).
	 */
	getKey(): string { return this.key; }
}