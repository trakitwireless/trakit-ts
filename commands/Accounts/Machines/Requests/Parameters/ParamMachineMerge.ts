

	/**
	 * Parameters used to create or update an {@link Machine}.
	 */
	export class ParamMachineMerge extends ParamMergeSubscribable {
		/**
		 * The unique identifier of the {@link Machine} you want to update.
		 *  <override required="update" />
		 */
		key: string = "";
		/**
		 * A flag to either remove, or generate a new {@link Machine.secret}.
		 */
		secret: boolean = false;
		/**
		 * The company to which this {@link Machine} belongs.
		 * After creation, this value is read-only.
		 *  <override required="create" />
		 */
		company: ulong = NaN;
		/**
		 * Human friendly name for this {@link Machine}.
		 *  <override max-length="100" />
		 */
		nickname: string = "";
		/**
		 * Notes about this {@link Machine}.
		 *  <override max-length="8000" />
		 */
		notes: string = "";
		/**
		 * Indicates whether system access is disable.
		 */
		enabled: boolean = false;
		/**
		 * An optional timestamp that restricts this {@link Machine} from being used before the given date.
		 */
		notBefore: Date = DATE();
		/**
		 * An optional timestamp that restricts this {@link Machine} from being used after the given date.
		 */
		notAfter: Date = DATE();

		/**
		 * The {@link Machine}'s local timezone.
		 * {@link Timezone.code}
		 *  <override type="System.String" format="codified" />
		 */
		timezone: TimeZoneInfo;
		/**
		 * Preferred region/language for the UI and notifications.
		 * Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
		 *  <override min-length="2" max-length="5" />
		 */
		language: string = "";
		/**
		 * The format strings defining the preferred way to display ambiguous values.
		 *  <override keys="codified" max-values-length="20" />
		 */
		formats: Map<string, string>;
		/**
		 * Preferred way of displaying ambiguous numbers in the context of measurements.
		 *  <override keys="codified" />
		 */
		measurements: Map<string, SystemsOfUnits?>;
		/**
		 * Additional options which do not fit in with the formats or measurements preferences.
		 *  <override keys="codified" max-values-length="20" />
		 */
		options: Map<string, string>;

		/**
		 * A list of {@link MachineGroup} to which this {@link Machine} belongs.
		 *  <override>
		 *  <values>
		 * {@link MachineGroup.id}
		 *  </values>
		 *  </override>
		 */
		groups: ulong[] = [];
		/**
		 * Individual permission rules which override the {@link MachineGroup} rules.
		 */
		permissions: ParamPermission[] = [];
		/**
		 * List of Fleet Freedom service URIs that this {@link Machine} is permitted to access.
		 *  <override>
		 *  <values type="System.String" max-length="254" format="url" />
		 *  </override>
		 */
		services: Uri[] = [];
		/**
		 * Optional list of your managed domains from which this {@link Machine} can be used.
		 *  <override>
		 *  <values type="System.String" max-length="254" format="url" />
		 *  </override>
		 */
		referrers: Uri[] = [];
		/**
		 * Restrict {@link Machine} access to only the provided IPv4 ranges (		/**
		 * Indicates whether completely insecure/unrestricted system access is allowed.
		 */
		insecure: boolean = false;
	}