

	/// <summary>
	/// A grouping of credentials, information, preferences, and permissions for a person or machine to login to the system and access its resources.
	/// </summary>
	export class User extends Compound implements IEnabled, IBelongCompany, IHavePreferences, IDeletable {
		/// <summary>
		/// 
		/// </summary>
		protected override Component[] Pieces => new Component[] {
			this.General,
			this.Advanced,
		};

		/// <summary>
		/// The unique public email address used to access the system.
		/// </summary>
		/// <seealso cref="User.login" />
		/// <override min-length="6" max-length="254" format="email" />
		public string login => this.General?.login
						?? this.Advanced?.login
						?? throw new NullReferenceException("general");
		/// <summary>
		/// The company to which this user belongs.
		/// </summary>
		/// <seealso cref="Company.id" />
		public ulong company => this.General?.company
							?? this.Advanced?.company
							?? throw new NullReferenceException("general");

		/// <summary>
		/// 
		/// </summary>
		public General: UserGeneral;
		/// <summary>
		/// Indicated whether the credentials have expired according to the company's policy.
		/// </summary>
		public boolean passwordExpired {
			get => (this.General ?? throw new NullReferenceException("general")).passwordExpired;
			set => (this.General ?? throw new NullReferenceException("general")).passwordExpired = value;
		}
		/// <summary>
		/// Indicates whether system access is disabled.
		/// </summary>
		public boolean enabled {
			get => (this.General ?? throw new NullReferenceException("general")).enabled;
			set => (this.General ?? throw new NullReferenceException("general")).enabled = value;
		}
		/// <summary>
		/// Human friendly name for these credentials
		/// </summary>
		/// <override max-length="100" />
		public string nickname {
			get => (this.General ?? throw new NullReferenceException("general")).nickname;
			set => (this.General ?? throw new NullReferenceException("general")).nickname = value;
		}
		/// <summary>
		/// Contact information for this user.
		/// </summary>
		/// <seealso cref="Contact.id" />
		public ulong? contact {
			get => (this.General ?? throw new NullReferenceException("general")).contact;
			set => (this.General ?? throw new NullReferenceException("general")).contact = value;
		}
		/// <summary>
		/// The user's local timezone.
		/// </summary>
		/// <seealso cref="Timezone.code" />
		public Timezone timezone {
			get => (this.General ?? throw new NullReferenceException("general")).timezone;
			set => (this.General ?? throw new NullReferenceException("general")).timezone = value;
		}
		/// <summary>
		/// Preferred region/language for the UI and notifications.
		/// Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
		/// </summary>
		/// <override min-length="2" max-length="5" format="codified" />
		public string language {
			get => (this.General ?? throw new NullReferenceException("general")).language;
			set => (this.General ?? throw new NullReferenceException("general")).language = value;
		}
		/// <summary>
		/// The format strings defining the preferred way to display ambiguous values.
		/// </summary>
		/// <override>
		/// <keys format="codified" />
		/// <values max-length="20" format="datetimetemplate" />
		/// </override>
		public Map<string, string> formats {
			get => (this.General ?? throw new NullReferenceException("general")).formats;
			set => (this.General ?? throw new NullReferenceException("general")).formats = value;
		}
		/// <summary>
		/// Preferred way of displaying ambiguous numbers in the context of measurements.
		/// </summary>
		/// <override>
		/// <keys format="codified" />
		/// </override>
		public Map<string, SystemsOfUnits> measurements {
			get => (this.General ?? throw new NullReferenceException("general")).measurements;
			set => (this.General ?? throw new NullReferenceException("general")).measurements = value;
		}
		/// <summary>
		/// Additional options which do not fit in with the formats or measurements preferences.
		/// </summary>
		/// <override>
		/// <keys format="codified" />
		/// <values max-length="20" />
		/// </override>
		public Map<string, string> options {
			get => (this.General ?? throw new NullReferenceException("general")).options;
			set => (this.General ?? throw new NullReferenceException("general")).options = value;
		}
		/// <summary>
		/// Definition of how and when to send alerts to the user.
		/// </summary>
		/// <override max-count="7" />
		public UserNotifications[] notify {
			get => (this.General ?? throw new NullReferenceException("general")).notify;
			set => (this.General ?? throw new NullReferenceException("general")).notify = value;
		}

		/// <summary>
		/// 
		/// </summary>
		public Advanced: UserAdvanced;
		/// <summary>
		/// A list of groups to which this user belongs.
		/// </summary>
		/// <seealso cref="UserGroup.id" />
		public ulong[] groups {
			get => (this.Advanced ?? throw new NullReferenceException("advanced")).groups;
			set => (this.Advanced ?? throw new NullReferenceException("advanced")).groups = value;
		}
		/// <summary>
		/// Individual permission rules which override the group rules.
		/// </summary>
		public Permission[] permissions {
			get => (this.Advanced ?? throw new NullReferenceException("advanced")).permissions;
			set => (this.Advanced ?? throw new NullReferenceException("advanced")).permissions = value;
		}

		// IRequestable
		/// <summary>
		/// The <see cref="login"/> is the key.
		/// </summary>
		/// <returns></returns>
		public getKey(): string { return this.login; }

		// IDeletable
		/// <summary>
		/// Indicates whether this object was deleted.
		/// </summary>
		public boolean? deleted => (this.General ?? throw new NullReferenceException("general")).deleted;
		/// <summary>
		/// Timestamp from the action that deleted or suspended this object.
		/// </summary>
		public Date? since => (this.General ?? throw new NullReferenceException("general")).since;
	}