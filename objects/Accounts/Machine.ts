import { Component, } from '../API/Component';
import { IEnabled, } from '../API/Interfaces/IEnabled';
import { IBelongCompany, } from '../API/Interfaces/IBelongCompany';
import { IHavePreferences, } from '../API/Interfaces/IHavePreferences';
import { IHavePermissions, } from '../API/Interfaces/IHavePermissions';
import { IDeletable, } from '../API/Interfaces/IDeletable';
import { codified, JsonObject, JsonValue, ulong } from '../API/Types';
import { DATE } from '../API/Functions';
import { Permission } from './Permissions/Permission';
import { SystemsOfUnits } from './SystemsOfUnits';
import { Timezone } from '../API/Timezone';
import { UserGroup } from './UserGroup';

export interface IMachine {
	/**
	 * The unique idenifier used to access the system.
	 */
	key: string;
	/**
	 * The company to which this user belongs.
	 */
	company: ulong;
	/**
	 * Indicates whether system access is disable.
	 */
	enabled: boolean;
	/**
	 * A token used to encode or validate requests.
	 */
	secret: string;
	/**
	 * Human friendly name for these credentials
	 */
	nickname: string;
	/**
	 * Notes about this machine.
	 */
	notes: string;
	/**
	 * An optional timestamp that restricts this machine account from being used before the given date.
	 */
	notBefore: Date;
	/**
	 * An optional timestamp that restricts this machine account from being used after the given date.
	 */
	notAfter: Date;
	/**
	 * The service account's local timezone.
	 */
	timezone: Timezone;
	/**
	 * Preferred region/language for the UI and notifications.
	 * Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
	 */
	language: string;
	/**
	 * The format strings defining the preferred way to display ambiguous values.
	 */
	formats: Map<codified, string>;
	/**
	 * Preferred way of displaying ambiguous numbers in the context of measurements.
	 */
	measurements: Map<codified, SystemsOfUnits>;
	/**
	 * Additional options which do not fit in with the formats or measurements preferences.
	 */
	options: Map<codified, string>;

	/**
	 * A list of groups to which this machine account belongs.
	 */
	groups: ulong[];
	/**
	 * Permission rules which override the group rules.
	 */
	permissions: Permission[];
	/**
	 * List of system service URIs that this machine account is permitted to access.
	 */
	services: string[];
	/**
	 * Optional list of your managed domains from which this machine account can be used.
	 */
	referrers: string[];
	/**
	 * Restrict service access to only the provided IP ranges.
	 * Currently we only support IPv4 ranges
	 * When true, no access restrictions ({@link secret}, {@link referrers}, or {@link ipRanges}) are enforced.
	 */
	insecure: boolean;
}

/**
 * A service account that allowes for API access of system services.
 */
export class Machine extends Component implements IEnabled, IBelongCompany, IHavePreferences, IHavePermissions, IDeletable {
	/**
	 * The unique idenifier used to access the system.
	 */
	key: string;
	/**
	 * The company to which this user belongs.
	 */
	company: ulong;
	/**
	 * Indicates whether system access is disable.
	 */
	enabled: boolean;
	/**
	 * A token used to encode or validate requests.
	 */
	secret: string;
	/**
	 * Human friendly name for these credentials
	 */
	nickname: string;
	/**
	 * Notes about this machine.
	 */
	notes: string;
	/**
	 * An optional timestamp that restricts this machine account from being used before the given date.
	 */
	notBefore: Date;
	/**
	 * An optional timestamp that restricts this machine account from being used after the given date.
	 */
	notAfter: Date;
	/**
	 * The service account's local timezone.
	 */
	timezone: Timezone;
	/**
	 * Preferred region/language for the UI and notifications.
	 * Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
	 */
	language: string;
	/**
	 * The format strings defining the preferred way to display ambiguous values.
	 */
	formats: Map<codified, string>;
	/**
	 * Preferred way of displaying ambiguous numbers in the context of measurements.
	 */
	measurements: Map<codified, SystemsOfUnits>;
	/**
	 * Additional options which do not fit in with the formats or measurements preferences.
	 */
	options: Map<codified, string>;

	/**
	 * A list of groups to which this machine account belongs.
	 */
	groups: UserGroup[];
	/**
	 * Permission rules which override the group rules.
	 */
	permissions: Permission[];
	/**
	 * List of system service URIs that this machine account is permitted to access.
	 */
	services: string[];
	/**
	 * Optional list of your managed domains from which this machine account can be used.
	 */
	referrers: string[];
	/**
	 * Restrict service access to only the provided IP ranges.
	 * Currently we only support IPv4 ranges
	 * When true, no access restrictions ({@link secret}, {@link referrers}, or {@link ipRanges}) are enforced.
	 */
	insecure: boolean;

	// IRequestable
	/**
	 * The {@link key} is the key (how about that).
	 */
	getKey(): string { return this.key; }

	// IDeletable
	/**
	 * Indicates whether this object was deleted.
	 */
	deleted: boolean;
	/**
	 * Timestamp from the action that deleted or suspended this object.
	 */
	since: Date;

	constructor(machine: IMachine) {
		super();
		if (machine) this.fromJSON(machine);
	}

	toJSON(): IMachine {
		
	}
	fromJSON(input: IMachine): void {
		
	}
}