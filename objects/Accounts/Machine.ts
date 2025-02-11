import { BaseComponent, } from '../API/BaseComponent';
import { DATE, ID, IS_AN, MAP_TO_OBJECT, OBJECT_TO_MAP, OBJECT_TO_MAP_BY_PREDICATE, OBJECT_TO_MAP_KEY_CODIFIED } from '../API/Functions';
import { IBelongCompany, } from '../API/Interfaces/IBelongCompany';
import { IEnabled, } from '../API/Interfaces/IEnabled';
import { IHavePermissions, } from '../API/Interfaces/IHavePermissions';
import { IHavePreferences, } from '../API/Interfaces/IHavePreferences';
import { Timezone } from '../API/Timezone';
import { codified, ipv4, ulong, url } from '../API/Types';
import { COMPANIES, GROUPS } from '../Storage';
import { Company } from '../Companies/Company';
import { ARRAY_TO_PERMISSIONS, Permission } from './Permissions/Permission';
import { SystemsOfUnits } from './SystemsOfUnits';
import { UserGroup } from './UserGroup';
import { CODIFY } from '../API/Codifier';
import { TIMEZONE_FIND } from '../API/Timezones';
import { ARRAY_TO_IDS, ARRAY_TO_JSON } from '../API/Arrays';
import { MAP_FILTERED_BY_KEYS } from '../API/Maps';

/**
 * A service account that allowes for API access of system services.
 */
export class Machine
	extends BaseComponent
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
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
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
	groupIds: ulong[] = [];
	/**
	 * A list of groups to which this machine account belongs.
	 */
	get groups(): UserGroup[] { return MAP_FILTERED_BY_KEYS(GROUPS, this.groupIds); }
	set groups(value: UserGroup[]) { this.groupIds = value?.map(ARRAY_TO_IDS) ?? []; }
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
	 * Currently we only support IPv4 ranges using CIDR slash-notation.
	 */
	ipRanges: ipv4[] = [];
	/**
	 * Restrict service access to only the provided IP ranges.
	 * Currently we only support IPv4 ranges
	 * When true, no access restrictions ({@link secret}, {@link referrers}, or {@link ipRanges}) are enforced.
	 */
	insecure: boolean = false;

	override toJSON() {
		return {
			"key": this.key,
			"v": this.v,
			"company": this.companyId,
			"nickname": this.nickname,
			"notes": this.notes,
			"enabled": !!this.enabled,
			"notBefore": IS_AN(this.notBefore.valueOf()) ? this.notBefore.toISOString() : "",
			"notAfter": IS_AN(this.notAfter.valueOf()) ? this.notAfter.toISOString() : "",
			"timezone": this.timezone?.code || Timezone.utc.code,
			"language": this.language,
			"formats": MAP_TO_OBJECT(this.formats),
			"measurements": MAP_TO_OBJECT(this.measurements),
			"options": MAP_TO_OBJECT(this.options),
			"groups": [...this.groupIds],
			"permissions": this.permissions?.map(ARRAY_TO_JSON) ?? [],
			"services": [...this.services],
			"referrers": [...this.referrers],
			"ipRanges": [...this.ipRanges],
			"insecure": !!this.insecure,
		};
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			if (!this.key) this.key = json["key"] || "";
			this.companyId = ID(json["company"]);
			this.secret = typeof json["secret"] === "string"
				? json["secret"]
				: "";
			this.nickname = json["nickname"] || "";
			this.notes = json["notes"] || "";
			this.enabled = !!json["enabled"];
			this.notBefore = DATE(json["notBefore"]);
			this.notAfter = DATE(json["notAfter"]);
			this.timezone = TIMEZONE_FIND(json["timezone"] || "") || Timezone.utc;
			this.language = json["language"] || "";
			this.formats = OBJECT_TO_MAP_KEY_CODIFIED(json["formats"] || {});
			this.measurements = OBJECT_TO_MAP_BY_PREDICATE(json["measurements"] || {}, (k, v) => [CODIFY(k), SystemsOfUnits[v as SystemsOfUnits] ?? SystemsOfUnits.metric]);
			this.options = OBJECT_TO_MAP_KEY_CODIFIED(json["options"] || {});
			this.groupIds = (json["groups"] || []).map(ID);
			this.permissions = (json["permissions"] || []).map(ARRAY_TO_PERMISSIONS);
			this.services = json["services"] || [];
			this.referrers = json["referrers"] || [];
			this.ipRanges = json["ipRanges"] || [];
			this.insecure = !!json["insecure"];
		}
		return update;
	}
	
	// IRequestable
	/**
	 * The {@link key} is the key (how about that).
	 */
	getKey(): string { return this.key; }
}