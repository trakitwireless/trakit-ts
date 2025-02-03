

	/**
	 * Allows a session {@link User} to change their own preferences.
	 */
	export class ReqSelfPreferences extends Request {
		/**
		 * Preferred region/language for the UI and notifications.
		 * Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
		 */
		language: string = "";
		/**
		 * Your local {@link Timezone} used to calculate times.
		 * {@link Timezone.code}
		 */
		timezone: TimeZoneInfo;
		/**
		 * List of {@link UserNotifications} preferences.
		 * Please note that active times cannot overlap.
		 */
		notify: UserNotifications[] = [];
		/**
		 * Formatting help for dates, times, numbers.
		 */
		formats: Map<string, string>;
		/**
		 * Preferred way of displaying ambiguous numbers in the context of measurements.
		 */
		measurements: Map<string, SystemsOfUnits?>;
		/**
		 * Additional options which do not fit in with the formats or measurements preferences.
		 * If a value of null is given, the option is removed.  To keep the option, you can use a blank string.
		 * For convenience, if the value of an option is given as JSON (instead of a string), they are automatically serialized with no white-space.
		 */
		options: Map<string, string>;
	}