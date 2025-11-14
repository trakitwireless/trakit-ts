import { ARRAY_TO_IDS, ARRAY_TO_JSON } from '../API/Arrays';
import { BaseComponent, } from '../API/BaseComponent';
import { CODIFY } from '../API/Codifier';
import { DATE, ID, JSON_DATE, JSON_TO_MAP_PREDICATE, JSON_TO_MAP_KEY_CODIFIED, MAP_TO_JSON } from '../API/Functions';
import { IBelongCompany, } from '../API/Interfaces/IBelongCompany';
import { IEnabled, } from '../API/Interfaces/IEnabled';
import { IHavePermissions, } from '../API/Interfaces/IHavePermissions';
import { IHavePreferences, } from '../API/Interfaces/IHavePreferences';
import { MAP_FILTERED_BY_KEYS } from '../API/Maps';
import { Timezone } from '../API/Timezone';
import { TIMEZONE_FIND } from '../API/Timezones';
import { codified, datetime, int, ipv4, JsonObject, ulong, url } from '../API/Types'; // JsonObject already present, no change needed
import { Company } from '../Companies/Company';
import { COMPANIES, GROUPS } from '../storage';
import { Permission } from './Permissions/Permission';
import { SystemsOfUnits } from './SystemsOfUnits';
import { UserGroup } from './UserGroup';

/**
 * A service account that allowes for API access of system services.
 */
export class Machine
	extends BaseComponent
	implements IEnabled, IBelongCompany, IHavePreferences, IHavePermissions {
	/**
	 * The unique idenifier used to access the system.
	 */
	key: string = '';
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
	secret: string = '';
	/**
	 * Human friendly name for these credentials
	 */
	nickname: string = '';
	/**
	 * Notes about this machine.
	 */
	notes: string = '';
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
	language: string = '';
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
			"v": [...this.v],
			"company": this.companyId,
			"nickname": this.nickname,
			"notes": this.notes,
			"enabled": !!this.enabled,
			"notBefore": JSON_DATE(this.notBefore),
			"notAfter": JSON_DATE(this.notAfter),
			"timezone": this.timezone?.code || Timezone.utc.code,
			"language": this.language,
			"formats": MAP_TO_JSON(this.formats),
			"measurements": MAP_TO_JSON(this.measurements),
			"options": MAP_TO_JSON(this.options),
			"groups": [...this.groupIds],
			"permissions": this.permissions?.map(ARRAY_TO_JSON) ?? [],
			"services": [...this.services],
			"referrers": [...this.referrers],
			"ipRanges": [...this.ipRanges],
			"insecure": !!this.insecure,
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		if (update) {
			if (!this.key) this.key = json["key"] as string || '';
			this.companyId = ID(json["company"]);
			this.secret = typeof json["secret"] === "string"
				? json["secret"]
				: '';
			this.nickname = json["nickname"] as string || '';
			this.notes = json["notes"] as string || '';
			this.enabled = !!json["enabled"];
			this.notBefore = DATE(json["notBefore"] as datetime);
			this.notAfter = DATE(json["notAfter"] as datetime);
			this.timezone = TIMEZONE_FIND(json["timezone"] as codified || '') || Timezone.utc;
			this.language = json["language"] as codified || '';
			this.formats = JSON_TO_MAP_KEY_CODIFIED(json["formats"] as object || {});
			this.measurements = JSON_TO_MAP_PREDICATE(json["measurements"] as object || {}, (k, v) => [CODIFY(k), SystemsOfUnits[v as SystemsOfUnits] ?? SystemsOfUnits.metric]);
			this.options = JSON_TO_MAP_KEY_CODIFIED(json["options"] as object || {});
			this.groupIds = (json["groups"] as ulong[] || []).map(ID);
			this.permissions = (json["permissions"] as JsonObject[] || []).map(Permission.fromJSON);
			this.services = json["services"] as url[] || [];
			this.referrers = json["referrers"] as url[] || [];
			this.ipRanges = json["ipRanges"] as ipv4[] || [];
			this.insecure = !!json["insecure"];
		}
		return update;
	}
	
	// IRequestable
	/**
	 * The {@link key} is the key (how about that).
	 */
	getKey() { return this.key; }

	/**
	 * Creates an HMAC256 signed input for use in requests.
	 * @param absoluteUri	URL of the request.
	 * @param method		HTTP verb of the request.
	 * @param contentLength	Content length of the request.
	 * @param date			Timestamp for when the request is created.
	 */
	async createHmacSignature(
		absoluteUri: URL | string,
		method: string = "GET",
		contentLength: number = 0,
		date: Date = new Date()
	): Promise<string> {
		const encoder = new TextEncoder();
		const utf8Input = encoder.encode([
			this.key,
			date.toISOString().replace(/[-T:]/g, '').slice(0, 14),	// yyyyMMddHHmmss in UTC
			method.toUpperCase(),
			absoluteUri.toString(),
			contentLength
		].join('\n'));
		// Import the secret key
		const cryptoKey = await crypto.subtle.importKey(
			'raw',
			Uint8Array.from(atob(this.secret), c => c.charCodeAt(0)),
			{ name: 'HMAC', hash: { name: 'SHA-256' } },
			false,
			['sign']
		);
		// Generate the HMAC
		const signature = new Uint8Array(await crypto.subtle.sign(
			'HMAC',
			cryptoKey,
			utf8Input
		));
		// Returned as base64
		return btoa(String.fromCharCode(...signature))
	}
}