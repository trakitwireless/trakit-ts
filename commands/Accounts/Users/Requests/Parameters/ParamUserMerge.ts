

	/// <summary>
	/// Parameters used to create or update an <see cref="User"/>.
	/// </summary>
	export class ParamUserMerge extends ParamMergeSubscribable {
		/// <summary>
		/// The unique identifier of the <see cref="User"/> you want to update.
		/// </summary>
		public login: string = "";
		/// <summary>
		/// The company to which this <see cref="User"/> belongs.
		/// After creation, this value is read-only.
		/// </summary>
		public company: ulong = NaN;
		/// <summary>
		/// Human friendly name for these credentials
		/// </summary>
		public nickname: string = "";
		/// <summary>
		/// This <see cref="User"/>'s password.
		/// </summary>
		public password: string = "";
		/// <summary>
		/// Indicated whether the credentials have expired according to the company's policy.
		/// </summary>
		public passwordExpired: boolean = false;
		/// <summary>
		/// Indicates whether system access is disable.
		/// </summary>
		public enabled: boolean = false;
		/// <summary>
		/// Contact information for this <see cref="User"/>.
		/// </summary>
		/// <seealso cref="Contact.id" />
		public contact: ulong = NaN;
		/// <summary>
		/// The <see cref="User"/>'s local timezone.
		/// </summary>
		/// <seealso cref="Timezone.code" />
		public timezone: TimeZoneInfo;
		/// <summary>
		/// Preferred region/language for the UI and notifications.
		/// Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
		/// </summary>
		public language: string = "";
		/// <summary>
		/// The format strings defining the preferred way to display ambiguous values.
		/// </summary>
		public formats: Map<string, string>;
		/// <summary>
		/// Preferred way of displaying ambiguous numbers in the context of measurements.
		/// </summary>
		public measurements: Map<string, SystemsOfUnits?>;
		/// <summary>
		/// Additional options which do not fit in with the formats or measurements preferences.
		/// </summary>
		public options: Map<string, string>;
		/// <summary>
		/// Definition of how and when to send alerts to the <see cref="User"/>.
		/// </summary>
		public notify: UserNotifications[] = [];
		/// <summary>
		/// A list of <see cref="UserGroup"/>s to which this <see cref="User"/> is a member.
		/// </summary>
		public groups: ulong[] = [];
		/// <summary>
		/// Individual permission rules which override the <see cref="UserGroup"/> rules.
		/// </summary>
		public permissions: ParamPermission[] = [];
	}