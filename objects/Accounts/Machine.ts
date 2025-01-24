

/**
 * A service account that allowes for API access of system services.
 */
export class Machine extends Component implements IEnabled, IBelongCompany, IHavePreferences, IHavePermissions, IDeletable {
	/**
	 * The unique idenifier used to access the system.
	 */
	public key: string = "";
	/**
	 * The company to which this user belongs.
	 */
	public company: ulong = NaN;
	/**
	 * Indicates whether system access is disable.
	 */
	public enabled: boolean = false;
	/**
	 * A token used to encode or validate requests.
	 */
	public secret: string = "";
	/**
	 * Human friendly name for these credentials
	 */
	public nickname: string = "";
	/**
	 * Notes about this machine.
	 */
	public notes: string = "";
	/**
	 * An optional timestamp that restricts this machine account from being used before the given date.
	 */
	public notBefore: Date = DATE();
	/**
	 * An optional timestamp that restricts this machine account from being used after the given date.
	 */
	public notAfter: Date = DATE();
	/**
	 * The service account's local timezone.
	 */
	public timezone: Timezone;
	/**
	 * Preferred region/language for the UI and notifications.
	 * Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
	 */
	public language: string = "";
	/**
	 * The format strings defining the preferred way to display ambiguous values.
	 */
	public formats: Map<codified, datetimetemplate>;
	/**
	 * Preferred way of displaying ambiguous numbers in the context of measurements.
	 */
	public measurements: Map<codified, SystemsOfUnits>;
	/**
	 * Additional options which do not fit in with the formats or measurements preferences.
	 */
	public options: Map<codified, string>;

	/**
	 * A list of groups to which this machine account belongs.
	 */
	public groups: ulong[] = [];
	/**
	 * Permission rules which override the group rules.
	 */
	public permissions: Permission[] = [];
	/**
	 * List of system service URIs that this machine account is permitted to access.
	 */
	public services: Uri[] = [];
	/**
	 * Optional list of your managed domains from which this machine account can be used.
	 */
	public referrers: Uri[] = [];
	/**
	 * Restrict service access to only the provided IP ranges.
	 * Currently we only support IPv4 ranges
	 * When true, no access restrictions (<see cref="secret"/>, <see cref="referrers"/>, or <see cref="ipRanges"/>) are enforced.
	 */
	public insecure: boolean = false;

	// IRequestable
	/**
	 * The <see cref="key"/> is the key (how about that).
	 */
	public getKey(): string { return this.key; }

	// IDeletable
	/**
	 * Indicates whether this object was deleted.
	 */
	public deleted: boolean = false;
	/**
	 * Timestamp from the action that deleted or suspended this object.
	 */
	public since: Date = DATE();
}