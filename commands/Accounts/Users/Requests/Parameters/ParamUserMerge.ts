

	/**
	 * Parameters used to create or update an {@link User}.
	 */
	export class ParamUserMerge extends ParamMergeSubscribable {
		/**
		 * The unique identifier of the {@link User} you want to update.
		 */
		login: string = "";
		/**
		 * The company to which this {@link User} belongs.
		 * After creation, this value is read-only.
		 */
		company: ulong = NaN;
		/**
		 * Human friendly name for these credentials
		 */
		nickname: string = "";
		/**
		 * This {@link User}'s password.
		 */
		password: string = "";
		/**
		 * Indicated whether the credentials have expired according to the company's policy.
		 */
		passwordExpired: boolean = false;
		/**
		 * Indicates whether system access is disable.
		 */
		enabled: boolean = false;
		/**
		 * Contact information for this {@link User}.
		 * {@link Contact.id}
		 */
		contact: ulong = NaN;
		/**
		 * The {@link User}'s local timezone.
		 * {@link Timezone.code}
		 */
		timezone: TimeZoneInfo;
		/**
		 * Preferred region/language for the UI and notifications.
		 * Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
		 */
		language: string = "";
		/**
		 * The format strings defining the preferred way to display ambiguous values.
		 */
		formats: Map<string, string>;
		/**
		 * Preferred way of displaying ambiguous numbers in the context of measurements.
		 */
		measurements: Map<string, SystemsOfUnits?>;
		/**
		 * Additional options which do not fit in with the formats or measurements preferences.
		 */
		options: Map<string, string>;
		/**
		 * Definition of how and when to send alerts to the {@link User}.
		 */
		notify: UserNotifications[] = [];
		/**
		 * A list of {@link UserGroup}s to which this {@link User} is a member.
		 */
		groups: ulong[] = [];
		/**
		 * Individual permission rules which override the {@link UserGroup} rules.
		 */
		permissions: ParamPermission[] = [];
	}