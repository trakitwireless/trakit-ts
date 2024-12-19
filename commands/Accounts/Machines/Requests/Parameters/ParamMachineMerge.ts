

	/// <summary>
	/// Parameters used to create or update an <see cref="Machine"/>.
	/// </summary>
	export class ParamMachineMerge extends ParamMergeSubscribable {
		/// <summary>
		/// The unique identifier of the <see cref="Machine"/> you want to update.
		/// </summary>
		/// <override required="update" />
		public key: string = "";
		/// <summary>
		/// A flag to either remove, or generate a new <see cref="Machine.secret"/>.
		/// </summary>
		public secret: boolean = false;
		/// <summary>
		/// The company to which this <see cref="Machine"/> belongs.
		/// After creation, this value is read-only.
		/// </summary>
		/// <override required="create" />
		public company: ulong = NaN;
		/// <summary>
		/// Human friendly name for this <see cref="Machine"/>.
		/// </summary>
		/// <override max-length="100" />
		public nickname: string = "";
		/// <summary>
		/// Notes about this <see cref="Machine"/>.
		/// </summary>
		/// <override max-length="8000" />
		public notes: string = "";
		/// <summary>
		/// Indicates whether system access is disable.
		/// </summary>
		public enabled: boolean = false;
		/// <summary>
		/// An optional timestamp that restricts this <see cref="Machine"/> from being used before the given date.
		/// </summary>
		public notBefore: Date = DATE();
		/// <summary>
		/// An optional timestamp that restricts this <see cref="Machine"/> from being used after the given date.
		/// </summary>
		public notAfter: Date = DATE();

		/// <summary>
		/// The <see cref="Machine"/>'s local timezone.
		/// </summary>
		/// <seealso cref="Timezone.code" />
		/// <override type="System.String" format="codified" />
		public timezone: TimeZoneInfo;
		/// <summary>
		/// Preferred region/language for the UI and notifications.
		/// Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
		/// </summary>
		/// <override min-length="2" max-length="5" />
		public language: string = "";
		/// <summary>
		/// The format strings defining the preferred way to display ambiguous values.
		/// </summary>
		/// <override keys="codified" max-values-length="20" />
		public formats: Map<string, string>;
		/// <summary>
		/// Preferred way of displaying ambiguous numbers in the context of measurements.
		/// </summary>
		/// <override keys="codified" />
		public measurements: Map<string, SystemsOfUnits?>;
		/// <summary>
		/// Additional options which do not fit in with the formats or measurements preferences.
		/// </summary>
		/// <override keys="codified" max-values-length="20" />
		public options: Map<string, string>;

		/// <summary>
		/// A list of <see cref="MachineGroup"/> to which this <see cref="Machine"/> belongs.
		/// </summary>
		/// <override>
		/// <values>
		/// <seealso cref="MachineGroup.id" />
		/// </values>
		/// </override>
		public groups: ulong[] = [];
		/// <summary>
		/// Individual permission rules which override the <see cref="MachineGroup"/> rules.
		/// </summary>
		public permissions: ParamPermission[] = [];
		/// <summary>
		/// List of Fleet Freedom service URIs that this <see cref="Machine"/> is permitted to access.
		/// </summary>
		/// <override>
		/// <values type="System.String" max-length="254" format="url" />
		/// </override>
		public services: Uri[] = [];
		/// <summary>
		/// Optional list of your managed domains from which this <see cref="Machine"/> can be used.
		/// </summary>
		/// <override>
		/// <values type="System.String" max-length="254" format="url" />
		/// </override>
		public referrers: Uri[] = [];
		/// <summary>
		/// Restrict <see cref="Machine"/> access to only the provided IPv4 ranges (		/// <summary>
		/// Indicates whether completely insecure/unrestricted system access is allowed.
		/// </summary>
		public insecure: boolean = false;
	}