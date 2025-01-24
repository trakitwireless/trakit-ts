

	/**
	 * Parameters used to create or update an <see cref="User"/>.
	 */
	export class ParamUserMerge extends ParamMergeSubscribable {
		/**
		 * The unique identifier of the <see cref="User"/> you want to update.
		 */
		public login: string = "";
		/**
		 * The company to which this <see cref="User"/> belongs.
		 * After creation, this value is read-only.
		 */
		public company: ulong = NaN;
		/**
		 * Human friendly name for these credentials
		 */
		public nickname: string = "";
		/**
		 * This <see cref="User"/>'s password.
		 */
		public password: string = "";
		/**
		 * Indicated whether the credentials have expired according to the company's policy.
		 */
		public passwordExpired: boolean = false;
		/**
		 * Indicates whether system access is disable.
		 */
		public enabled: boolean = false;
		/**
		 * Contact information for this <see cref="User"/>.
		 * {@link Contact.id}
		 */
		public contact: ulong = NaN;
		/**
		 * The <see cref="User"/>'s local timezone.
		 * {@link Timezone.code}
		 */
		public timezone: TimeZoneInfo;
		/**
		 * Preferred region/language for the UI and notifications.
		 * Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
		 */
		public language: string = "";
		/**
		 * The format strings defining the preferred way to display ambiguous values.
		 */
		public formats: Map<string, string>;
		/**
		 * Preferred way of displaying ambiguous numbers in the context of measurements.
		 */
		public measurements: Map<string, SystemsOfUnits?>;
		/**
		 * Additional options which do not fit in with the formats or measurements preferences.
		 */
		public options: Map<string, string>;
		/**
		 * Definition of how and when to send alerts to the <see cref="User"/>.
		 */
		public notify: UserNotifications[] = [];
		/**
		 * A list of <see cref="UserGroup"/>s to which this <see cref="User"/> is a member.
		 */
		public groups: ulong[] = [];
		/**
		 * Individual permission rules which override the <see cref="UserGroup"/> rules.
		 */
		public permissions: ParamPermission[] = [];
	}