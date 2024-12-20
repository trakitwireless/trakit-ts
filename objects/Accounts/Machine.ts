

	/// <summary>
	/// A service account that allowes for API access of system services.
	/// </summary>
	export class Machine extends Component implements IEnabled, IBelongCompany, IHavePreferences, IHavePermissions, IDeletable {
		/// <summary>
		/// The unique idenifier used to access the system.
		/// </summary>
		/// <override max-length="50" />
		public key: string = "";
		/// <summary>
		/// The company to which this user belongs.
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong = NaN;
		/// <summary>
		/// Indicates whether system access is disable.
		/// </summary>
		public enabled: boolean = false;
		/// <summary>
		/// A token used to encode or validate requests.
		/// </summary>
		/// <override max-length="1000" />
		public secret: string = "";
		/// <summary>
		/// Human friendly name for these credentials
		/// </summary>
		/// <override max-length="100" />
		public nickname: string = "";
		/// <summary>
		/// Notes about this machine.
		/// </summary>
		/// <override max-length="8000" />
		public notes: string = "";
		/// <summary>
		/// An optional timestamp that restricts this machine account from being used before the given date.
		/// </summary>
		public notBefore: Date = DATE();
		/// <summary>
		/// An optional timestamp that restricts this machine account from being used after the given date.
		/// </summary>
		public notAfter: Date = DATE();
		/// <summary>
		/// The service account's local timezone.
		/// </summary>
		/// <seealso cref="Timezone.code" />
		public timezone: Timezone;
		/// <summary>
		/// Preferred region/language for the UI and notifications.
		/// Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
		/// </summary>
		/// <override min-length="2" max-length="5" format="codified" />
		public language: string = "";
		/// <summary>
		/// The format strings defining the preferred way to display ambiguous values.
		/// </summary>
		/// <override>
		/// <keys format="codified" />
		/// <values max-length="20" format="datetimetemplate" />
		/// </override>
		public formats: Map<string, string>;
		/// <summary>
		/// Preferred way of displaying ambiguous numbers in the context of measurements.
		/// </summary>
		/// <override>
		/// <keys format="codified" />
		/// </override>
		public measurements: Map<string, SystemsOfUnits>;
		/// <summary>
		/// Additional options which do not fit in with the formats or measurements preferences.
		/// </summary>
		/// <override>
		/// <keys format="codified" />
		/// <values max-length="20" />
		/// </override>
		public options: Map<string, string>;

		/// <summary>
		/// A list of groups to which this machine account belongs.
		/// </summary>
		/// <seealso cref="UserGroup.id" />
		public groups: ulong[] = [];
		/// <summary>
		/// Permission rules which override the group rules.
		/// </summary>
		public permissions: Permission[] = [];
		/// <summary>
		/// List of system service URIs that this machine account is permitted to access.
		/// </summary>
		/// <override>
		/// <values type="System.String" max-length="254" format="url" />
		/// </override>
		public services: Uri[] = [];
		/// <summary>
		/// Optional list of your managed domains from which this machine account can be used.
		/// </summary>
		/// <override>
		/// <values type="System.String" max-length="254" format="url" />
		/// </override>
		public referrers: Uri[] = [];
		/// <summary>
		/// Restrict service access to only the provided IP ranges.
		/// Currently we only support IPv4 ranges 		/// <summary>
		/// When true, no access restrictions (<see cref="secret"/>, <see cref="referrers"/>, or <see cref="ipRanges"/>) are enforced.
		/// </summary>
		public insecure: boolean = false;

		// IRequestable
		/// <summary>
		/// The <see cref="key"/> is the key (how about that).
		/// </summary>
		/// <returns></returns>
		public getKey(): string { return this.key; }

		// IDeletable
		/// <summary>
		/// Indicates whether this object was deleted.
		/// </summary>
		public deleted: boolean = false;
		/// <summary>
		/// Timestamp from the action that deleted or suspended this object.
		/// </summary>
		public since: Date = DATE();
	}