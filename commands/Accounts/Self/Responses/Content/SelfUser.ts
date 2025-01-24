

	/**
	 * Similar to the <see cref="User"/> object, but instead of the <see cref="contact"/>
	 * and <see cref="groups"/> properties being identifiers of other objects,
	 * the <see cref="Contact"/> and <see cref="UserGroup"/> objects are embedded within.
	 */
	export class SelfUser extends Compound implements IBelongCompany, IEnabled, IDeletable {
		/**
		 *  
		 */
		protected override Component[] Pieces => new Component[] {
			this.General,
			this.Advanced,
		};

		/**
		 * The unique public email address you use to access the system.
		 * {@link Asset.id}
		 */
		public string login => this.General?.login
						?? this.Advanced?.login
						?? throw new NullReferenceException("general");
		/**
		 * The company to which you belong.
		 * {@link Company.id}
		 */
		public ulong company => this.General?.company
						?? this.Advanced?.company
						?? throw new NullReferenceException("general");

		/**
		 *  
		 */
		public General: SelfUserGeneral;
		/**
		 * Indicated whether the credentials have expired according to the company's policy.
		 */
		public boolean passwordExpired {
			get => (this.General ?? throw new NullReferenceException("general")).passwordExpired;
			set => (this.General ?? throw new NullReferenceException("general")).passwordExpired = value;
		}
		/**
		 * Indicates whether system access is disabled.
		 */
		public boolean enabled {
			get => (this.General ?? throw new NullReferenceException("general")).enabled;
			set => (this.General ?? throw new NullReferenceException("general")).enabled = value;
		}
		/**
		 * Human friendly name for these credentials
		 *  <override max-length="100" />
		 */
		public string nickname {
			get => (this.General ?? throw new NullReferenceException("general")).nickname;
			set => (this.General ?? throw new NullReferenceException("general")).nickname = value;
		}
		/**
		 * Associated contact information for this user.
		 */
		public Contact contact {
			get => (this.General ?? throw new NullReferenceException("general")).contact;
			set => (this.General ?? throw new NullReferenceException("general")).contact = value;
		}
		/**
		 * The user's local timezone.
		 * {@link Timezone.code}
		 */
		public Timezone timezone {
			get => (this.General ?? throw new NullReferenceException("general")).timezone;
			set => (this.General ?? throw new NullReferenceException("general")).timezone = value;
		}
		/**
		 * Preferred region/language for the UI and notifications.
		 * Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
		 *  <override min-length="2" max-length="5" format="codified" />
		 */
		public string language {
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
		public Map<string, string> formats {
			get => (this.General ?? throw new NullReferenceException("general")).formats;
			set => (this.General ?? throw new NullReferenceException("general")).formats = value;
		}
		/**
		 * Preferred way of displaying ambiguous numbers in the context of measurements.
		 *  <override>
		 *  <keys format="codified" />
		 *  </override>
		 */
		public Map<string, SystemsOfUnits> measurements {
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
		public Map<string, string> options {
			get => (this.General ?? throw new NullReferenceException("general")).options;
			set => (this.General ?? throw new NullReferenceException("general")).options = value;
		}
		/**
		 * Definition of how and when to send alerts to the user.
		 *  <override max-count="7" />
		 */
		public UserNotifications[] notify {
			get => (this.General ?? throw new NullReferenceException("general")).notify;
			set => (this.General ?? throw new NullReferenceException("general")).notify = value;
		}

		/**
		 *  
		 */
		public Advanced: SelfUserAdvanced;
		/**
		 * Individual permission rules which override the <see cref="UserGroup"/> rules.
		 */
		public Permission[] permissions {
			get => (this.Advanced ?? throw new NullReferenceException("advanced")).permissions;
			set => (this.Advanced ?? throw new NullReferenceException("advanced")).permissions = value;
		}
		/**
		 * The list of <see cref="UserGroup"/>s to which this <see cref="User"/> belongs.
		 */
		public UserGroup[] groups {
			get => (this.Advanced ?? throw new NullReferenceException("advanced")).groups;
			set => (this.Advanced ?? throw new NullReferenceException("advanced")).groups = value;
		}

		// IRequestable
		/**
		 * The <see cref="login"/> is the key.
		 */
public getKey(): string { return this.login; }

		// ISuspendable and IDeletable
		/**
		 * Indicates whether this object was deleted.
		 */
		public boolean? deleted => (this.General ?? throw new NullReferenceException("general")).deleted;
		/**
		 * Timestamp from the action that deleted or suspended this object.
		 */
		public Date? since => (this.General ?? throw new NullReferenceException("general")).since;
	}