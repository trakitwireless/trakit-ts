

	/**
	 * A grouping of credentials, information, preferences, and permissions for a person or machine to login to the system and access its resources.
	 */
	export class User extends Compound implements IEnabled, IBelongCompany, IHavePreferences, IDeletable {
		/**
		 *  
		 */
		protected override Component[] Pieces => new Component[] {
			this.General,
			this.Advanced,
		};

		/**
		 * The unique public email address used to access the system.
		 * {@link User.login}
		 *  <override min-length="6" max-length="254" format="email" />
		 */
		string login => this.General?.login
						?? this.Advanced?.login
						?? throw new NullReferenceException("general");
		/**
		 * The company to which this user belongs.
		 * {@link Company.id}
		 */
		ulong company => this.General?.company
							?? this.Advanced?.company
							?? throw new NullReferenceException("general");

		/**
		 *  
		 */
		General: UserGeneral;
		/**
		 * Indicated whether the credentials have expired according to the company's policy.
		 */
		boolean passwordExpired {
			get => (this.General ?? throw new NullReferenceException("general")).passwordExpired;
			set => (this.General ?? throw new NullReferenceException("general")).passwordExpired = value;
		}
		/**
		 * Indicates whether system access is disabled.
		 */
		boolean enabled {
			get => (this.General ?? throw new NullReferenceException("general")).enabled;
			set => (this.General ?? throw new NullReferenceException("general")).enabled = value;
		}
		/**
		 * Human friendly name for these credentials
		 *  <override max-length="100" />
		 */
		string nickname {
			get => (this.General ?? throw new NullReferenceException("general")).nickname;
			set => (this.General ?? throw new NullReferenceException("general")).nickname = value;
		}
		/**
		 * Contact information for this user.
		 * {@link Contact.id}
		 */
		ulong? contact {
			get => (this.General ?? throw new NullReferenceException("general")).contact;
			set => (this.General ?? throw new NullReferenceException("general")).contact = value;
		}
		/**
		 * The user's local timezone.
		 * {@link Timezone.code}
		 */
		Timezone timezone {
			get => (this.General ?? throw new NullReferenceException("general")).timezone;
			set => (this.General ?? throw new NullReferenceException("general")).timezone = value;
		}
		/**
		 * Preferred region/language for the UI and notifications.
		 * Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
		 *  <override min-length="2" max-length="5" format="codified" />
		 */
		string language {
			get => (this.General ?? throw new NullReferenceException("general")).language;
			set => (this.General ?? throw new NullReferenceException("general")).language = value;
		}
		/**
		 * The format strings defining the preferred way to display ambiguous values.
		 *  <override>
		 *  <keys format="codified" />
		 *  <values max-length="20" format="datetimetemplate" />
		 *  </override>
		 */
		Map<string, string> formats {
			get => (this.General ?? throw new NullReferenceException("general")).formats;
			set => (this.General ?? throw new NullReferenceException("general")).formats = value;
		}
		/**
		 * Preferred way of displaying ambiguous numbers in the context of measurements.
		 *  <override>
		 *  <keys format="codified" />
		 *  </override>
		 */
		Map<string, SystemsOfUnits> measurements {
			get => (this.General ?? throw new NullReferenceException("general")).measurements;
			set => (this.General ?? throw new NullReferenceException("general")).measurements = value;
		}
		/**
		 * Additional options which do not fit in with the formats or measurements preferences.
		 *  <override>
		 *  <keys format="codified" />
		 *  <values max-length="20" />
		 *  </override>
		 */
		Map<string, string> options {
			get => (this.General ?? throw new NullReferenceException("general")).options;
			set => (this.General ?? throw new NullReferenceException("general")).options = value;
		}
		/**
		 * Definition of how and when to send alerts to the user.
		 *  <override max-count="7" />
		 */
		UserNotifications[] notify {
			get => (this.General ?? throw new NullReferenceException("general")).notify;
			set => (this.General ?? throw new NullReferenceException("general")).notify = value;
		}

		/**
		 *  
		 */
		Advanced: UserAdvanced;
		/**
		 * A list of groups to which this user belongs.
		 * {@link UserGroup.id}
		 */
		ulong[] groups {
			get => (this.Advanced ?? throw new NullReferenceException("advanced")).groups;
			set => (this.Advanced ?? throw new NullReferenceException("advanced")).groups = value;
		}
		/**
		 * Individual permission rules which override the group rules.
		 */
		Permission[] permissions {
			get => (this.Advanced ?? throw new NullReferenceException("advanced")).permissions;
			set => (this.Advanced ?? throw new NullReferenceException("advanced")).permissions = value;
		}

		// IRequestable
		/**
		 * The {@link login} is the key.
		 */
public getKey(): string { return this.login; }

		// IDeletable
		/**
		 * Indicates whether this object was deleted.
		 */
		boolean? deleted => (this.General ?? throw new NullReferenceException("general")).deleted;
		/**
		 * Timestamp from the action that deleted or suspended this object.
		 */
		Date? since => (this.General ?? throw new NullReferenceException("general")).since;
	}