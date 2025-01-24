

	/**
	 * The full company object which contains all fields.
	 */
	export class Company extends Compound implements IIdUlong, INamed, IAmCompany, IDeletable {
		/**
		 *  
		 */
		protected override Component[] Pieces => new Component[] {
			this.General,
			default,	// reserved for future use
			this.Directory,
			this.Styles,
			this.Policies,
			this.Reseller,
		};

		/**
		 * Unique identifier of this Company.
		 * {@link Asset.id}
		 */
		public ulong id => this.General?.id
						?? this.Directory?.id
						?? this.Policies?.id
						?? this.Styles?.id
						?? this.Reseller?.id
						?? throw new NullReferenceException("general");
		/**
		 * The parent organization for this Company.
		 * {@link Company.id}
		 */
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

		/**
		 *  
		 */
		public General: CompanyGeneral;
		/**
		 * The organizational name.
		 *  <override max-length="100" />
		 */
		public string name {
			get => (this.General ?? throw new NullReferenceException("general")).name;
			set => (this.General ?? throw new NullReferenceException("general")).name = value;
		}
		/**
		 * Notes.
		 */
		public string notes {
			get => (this.General ?? throw new NullReferenceException("general")).notes;
			set => (this.General ?? throw new NullReferenceException("general")).notes = value;
		}
		/**
		 * Name/value collections of custom fields used to refer to external systems.
		 *  <override max-count="10">
		 *  <keys max-length="20" />
		 *  <values max-length="100" />
		 *  </override>
		 */
		public Map<string, string> references {
			get => (this.General ?? throw new NullReferenceException("general")).references;
			set => (this.General ?? throw new NullReferenceException("general")).references = value;
		}

		/**
		 *  
		 */
		public Directory: CompanyDirectory;
		/**
		 * The list of Contacts from this and other companies broken down by contact role.
		 */
		public Map<string, ulong[]> employees {
			get => (this.Directory ?? throw new NullReferenceException("directory")).directory;
			set => (this.Directory ?? throw new NullReferenceException("directory")).directory = value;
		}

		/**
		 *  
		 */
		public Policies: CompanyPolicies;
		/**
		 * The session lifetime policy.
		 */
		public SessionPolicy sessionPolicy {
			get => (this.Policies ?? throw new NullReferenceException("policies")).sessionPolicy;
			set => (this.Policies ?? throw new NullReferenceException("policies")).sessionPolicy = value;
		}
		/**
		 * The password complexity and expiry policy.
		 */
		public PasswordPolicy passwordPolicy {
			get => (this.Policies ?? throw new NullReferenceException("policies")).passwordPolicy;
			set => (this.Policies ?? throw new NullReferenceException("policies")).passwordPolicy = value;
		}

		/**
		 *  
		 */
		public Styles: CompanyStyles;
		/**
		 * The styles for labels added to Assets, Places, and other things.
		 */
		public Map<string, LabelStyle> labels {
			get => (this.Styles ?? throw new NullReferenceException("styles")).labels;
			set => (this.Styles ?? throw new NullReferenceException("styles")).labels = value;
		}
		/**
		 * The styles for status tags added to Assets.
		 */
		public Map<string, LabelStyle> tags {
			get => (this.Styles ?? throw new NullReferenceException("styles")).tags;
			set => (this.Styles ?? throw new NullReferenceException("styles")).tags = value;
		}

		/**
		 * If this company is a reseller, then they have their own theme, support and billing information.
		 */
		public Reseller: CompanyReseller;

		// IRequestable
		/**
		 * The <see cref="id"/> is the key.
		 */
public getKey(): string { return this.id.toString(); }

		// IDeletable
		/**
		 * Indicates whether this object was deleted.
		 */
		public boolean? deleted => this.General?.deleted;
		/**
		 * Timestamp from the action that deleted or suspended this object.
		 */
		public Date? since => this.General?.since;
	}