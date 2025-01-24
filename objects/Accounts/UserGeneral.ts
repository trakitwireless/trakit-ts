

	/**
	 * Credentials, information, and preferences about a user.
	 */
	export class UserGeneral extends Component implements IEnabled, IBelongCompany, IHavePreferences, IDeletable {
		/**
		 * The unique public email address used to access the system.
		 * {@link User.login}
		 *  <override min-length="6" max-length="254" format="email" />
		 */
		public login: string = "";
		/**
		 * The company to which this user belongs.
		 * {@link Company.id}
		 */
		public company: ulong = NaN;
		/**
		 * Indicated whether the credentials have expired according to the company's policy.
		 */
		public passwordExpired: boolean = false;
		/**
		 * Indicates whether system access is disabled.
		 */
		public enabled: boolean = false;
		/**
		 * Human friendly name for these credentials
		 *  <override max-length="100" />
		 */
		public nickname: string = "";
		/**
		 * Contact information for this user.
		 * {@link Contact.id}
		 */
		public contact: ulong = NaN;
		/**
		 * The user's local timezone.
		 * {@link Timezone.code}
		 */
		public timezone: Timezone;
		/**
		 * Preferred region/language for the UI and notifications.
		 * Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
		 *  <override min-length="2" max-length="5" format="codified" />
		 */
		public language: string = "";
		/**
		 * The format strings defining the preferred way to display ambiguous values.
		 *  <override>
		 *  <keys format="codified" />
		 *  <values max-length="20" format="datetimetemplate" />
		 *  </override>
		 */
		public formats: Map<string, string>;
		/**
		 * Preferred way of displaying ambiguous numbers in the context of measurements.
		 *  <override>
		 *  <keys format="codified" />
		 *  </override>
		 */
		public measurements: Map<string, SystemsOfUnits>;
		/**
		 * Additional options which do not fit in with the formats or measurements preferences.
		 *  <override>
		 *  <keys format="codified" />
		 *  <values max-length="20" />
		 *  </override>
		 */
		public options: Map<string, string>;
		/**
		 * Definition of how and when to send alerts to the user.
		 *  <override max-count="7" />
		 */
		public notify: UserNotifications[] = [];

		// IRequestable
		/**
		 * The <see cref="login"/> is the key.
		 */
public getKey(): string { return this.login; }

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