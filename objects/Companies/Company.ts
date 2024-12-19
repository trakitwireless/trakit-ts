

	/// <summary>
	/// The full company object which contains all fields.
	/// </summary>
	export class Company extends Compound implements IIdUlong, INamed, IAmCompany, IDeletable {
		/// <summary>
		/// 
		/// </summary>
		protected override Component[] Pieces => new Component[] {
			this.General,
			default,	// reserved for future use
			this.Directory,
			this.Styles,
			this.Policies,
			this.Reseller,
		};

		/// <summary>
		/// Unique identifier of this Company.
		/// </summary>
		/// <seealso cref="Asset.id" />
		public ulong id => this.General?.id
						?? this.Directory?.id
						?? this.Policies?.id
						?? this.Styles?.id
						?? this.Reseller?.id
						?? throw new NullReferenceException("general");
		/// <summary>
		/// The parent organization for this Company.
		/// </summary>
		/// <seealso cref="Company.id" />
		public ulong parent {
			get => this.General?.parent
				?? this.Directory?.parent
				?? this.Policies?.parent
				?? this.Styles?.parent
				?? this.Reseller?.parent
				?? throw new NullReferenceException("general");
			set {
				if (this.General != default) this.General.parent = value;
				if (this.Directory != default) this.Directory.parent = value;
				if (this.Policies != default) this.Policies.parent = value;
				if (this.Styles != default) this.Styles.parent = value;
				if (this.Reseller != default) this.Reseller.parent = value;
			}
		}

		/// <summary>
		/// 
		/// </summary>
		public General: CompanyGeneral;
		/// <summary>
		/// The organizational name.
		/// </summary>
		/// <override max-length="100" />
		public string name {
			get => (this.General ?? throw new NullReferenceException("general")).name;
			set => (this.General ?? throw new NullReferenceException("general")).name = value;
		}
		/// <summary>
		/// Notes.
		/// </summary>
		public string notes {
			get => (this.General ?? throw new NullReferenceException("general")).notes;
			set => (this.General ?? throw new NullReferenceException("general")).notes = value;
		}
		/// <summary>
		/// Name/value collections of custom fields used to refer to external systems.
		/// </summary>
		/// <override max-count="10">
		/// <keys max-length="20" />
		/// <values max-length="100" />
		/// </override>
		public Map<string, string> references {
			get => (this.General ?? throw new NullReferenceException("general")).references;
			set => (this.General ?? throw new NullReferenceException("general")).references = value;
		}

		/// <summary>
		/// 
		/// </summary>
		public Directory: CompanyDirectory;
		/// <summary>
		/// The list of Contacts from this and other companies broken down by contact role.
		/// </summary>
		public Map<string, ulong[]> employees {
			get => (this.Directory ?? throw new NullReferenceException("directory")).directory;
			set => (this.Directory ?? throw new NullReferenceException("directory")).directory = value;
		}

		/// <summary>
		/// 
		/// </summary>
		public Policies: CompanyPolicies;
		/// <summary>
		/// The session lifetime policy.
		/// </summary>
		public SessionPolicy sessionPolicy {
			get => (this.Policies ?? throw new NullReferenceException("policies")).sessionPolicy;
			set => (this.Policies ?? throw new NullReferenceException("policies")).sessionPolicy = value;
		}
		/// <summary>
		/// The password complexity and expiry policy.
		/// </summary>
		public PasswordPolicy passwordPolicy {
			get => (this.Policies ?? throw new NullReferenceException("policies")).passwordPolicy;
			set => (this.Policies ?? throw new NullReferenceException("policies")).passwordPolicy = value;
		}

		/// <summary>
		/// 
		/// </summary>
		public Styles: CompanyStyles;
		/// <summary>
		/// The styles for labels added to Assets, Places, and other things.
		/// </summary>
		public Map<string, LabelStyle> labels {
			get => (this.Styles ?? throw new NullReferenceException("styles")).labels;
			set => (this.Styles ?? throw new NullReferenceException("styles")).labels = value;
		}
		/// <summary>
		/// The styles for status tags added to Assets.
		/// </summary>
		public Map<string, LabelStyle> tags {
			get => (this.Styles ?? throw new NullReferenceException("styles")).tags;
			set => (this.Styles ?? throw new NullReferenceException("styles")).tags = value;
		}

		/// <summary>
		/// If this company is a reseller, then they have their own theme, support and billing information.
		/// </summary>
		public Reseller: CompanyReseller;

		// IRequestable
		/// <summary>
		/// The <see cref="id"/> is the key.
		/// </summary>
		/// <returns></returns>
		public getKey(): string { return this.id.toString(); }

		// IDeletable
		/// <summary>
		/// Indicates whether this object was deleted.
		/// </summary>
		public boolean? deleted => this.General?.deleted;
		/// <summary>
		/// Timestamp from the action that deleted or suspended this object.
		/// </summary>
		public Date? since => this.General?.since;
	}