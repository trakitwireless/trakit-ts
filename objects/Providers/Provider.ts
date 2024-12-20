

	/// <summary>
	/// A device, modem, or service which provides events from the field.
	/// </summary>
	export class Provider extends Compound implements INamed, IBelongCompany, IDeletable {
		/// <summary>
		/// 
		/// </summary>
		protected override Component[] Pieces => new Component[] {
			this.General,
			this.Advanced,
			this.Control,
		};

		/// <summary>
		/// Unique identifier of this device.
		/// </summary>
		/// <seealso cref="Asset.id" />
		public string id => this.General?.id
						?? this.Advanced?.id
						?? this.Control?.id
						?? throw new NullReferenceException("general");
		/// <summary>
		/// The company to which this device belongs.
		/// </summary>
		/// <seealso cref="Company.id" />
		public ulong company => this.General?.company
							?? this.Advanced?.company
							?? this.Control?.company
							?? throw new NullReferenceException("general");
		/// <summary>
		/// The kind of communication protocol this device uses.
		/// </summary>
		public ProviderType kind => this.General?.kind
							?? throw new NullReferenceException("general");

		/// <summary>
		/// 
		/// </summary>
		public General: ProviderGeneral;
		/// <summary>
		/// This thing's name.
		/// </summary>
		/// <override max-length="100" />
		public string name {
			get => (this.General ?? throw new NullReferenceException("general")).name;
			set => (this.General ?? throw new NullReferenceException("general")).name = value;
		}
		/// <summary>
		/// Notes about it.
		/// </summary>
		public string notes {
			get => (this.General ?? throw new NullReferenceException("general")).notes;
			set => (this.General ?? throw new NullReferenceException("general")).notes = value;
		}
		/// <summary>
		/// The asset for which this device provides field data.
		/// </summary>
		/// <seealso cref="Asset.id" />
		public ulong? asset {
			get => (this.General ?? throw new NullReferenceException("general")).asset;
			set => (this.General ?? throw new NullReferenceException("general")).asset = value;
		}
		/// <summary>
		/// The provider's current (or pending) configuration profile.
		/// </summary>
		/// <seealso cref="ProviderConfig.id" />
		/// <seealso cref="ProviderConfiguration.id" />
		public ulong configuration {
			get => (this.General ?? throw new NullReferenceException("general")).configuration;
			set => (this.General ?? throw new NullReferenceException("general")).configuration = value;
		}
		/// <summary>
		/// The password programmed on the device used to ensure the system is the only client authorized to make changes.
		/// </summary>
		/// <override max-length="50" />
		public string password {
			get => (this.General ?? throw new NullReferenceException("general")).password;
			set => (this.General ?? throw new NullReferenceException("general")).password = value;
		}
		/// <summary>
		/// The firmware/application version number.
		/// </summary>
		/// <override max-length="100" />
		public string firmware {
			get => (this.General ?? throw new NullReferenceException("general")).firmware;
			set => (this.General ?? throw new NullReferenceException("general")).firmware = value;
		}
		/// <summary>
		/// The phone number of this device.
		/// </summary>
		/// <override format="phone" />
		public ulong? phoneNumber {
			get => (this.General ?? throw new NullReferenceException("general")).phoneNumber;
			set => (this.General ?? throw new NullReferenceException("general")).phoneNumber = value;
		}
		/// <summary>
		/// A list of read-only values about the device like IMEI, ESN, firmware version, hardware revision, etc...
		/// </summary>
		/// <override>
		/// <keys>
		/// <seealso cref="DataName" />
		/// </keys>
		/// </override>
		public Map<string, string> information {
			get => (this.General ?? throw new NullReferenceException("general")).information;
			set => (this.General ?? throw new NullReferenceException("general")).information = value;
		}
		/// <summary>
		/// ICCID of the SIM card installed in this provider
		/// </summary>
		public string sim {
			get => (this.General ?? throw new NullReferenceException("general")).sim;
			set => (this.General ?? throw new NullReferenceException("general")).sim = value;
		}

		/// <summary>
		/// 
		/// </summary>
		public Advanced: ProviderAdvanced;
		/// <summary>
		/// The last IP address of the device.
		/// </summary>
		/// <override type="System.String" format="ipv4" />
		public IPEndPoint lastIP {
			get => (this.Advanced ?? throw new NullReferenceException("advanced")).lastIP;
			set => (this.Advanced ?? throw new NullReferenceException("advanced")).lastIP = value;
		}
		/// <summary>
		/// Often changing values like latitude, longitude, speed, wiring state, VBus information, etc...
		/// </summary>
		public Map<string, Map<string, ProviderData>> attributes {
			get => (this.Advanced ?? throw new NullReferenceException("advanced")).attributes;
			set => (this.Advanced ?? throw new NullReferenceException("advanced")).attributes = value;
		}
		/// <summary>
		/// Store-and-forward information like last sequence number of SnF window
		/// </summary>
		public Map<string, string> snf {
			get => (this.Advanced ?? throw new NullReferenceException("advanced")).snf;
			set => (this.Advanced ?? throw new NullReferenceException("advanced")).snf = value;
		}

		/// <summary>
		/// 
		/// </summary>
		public Control: ProviderControl;
		/// <summary>
		/// Collection of commands for this provider.
		/// </summary>
		public Map<ProviderCommandType, ProviderCommand> commands {
			get => (this.Control ?? throw new NullReferenceException("control")).commands;
			set => (this.Control ?? throw new NullReferenceException("control")).commands = value;
		}

		// IRequestable
		/// <summary>
		/// The <see cref="id"/> is the key.
		/// </summary>
		/// <returns></returns>
		public getKey(): string { return this.id; }

		// ISuspendable and IDeletable
		/// <summary>
		/// Indicates whether this object was deleted.
		/// </summary>
		public boolean? deleted => (this.General ?? throw new NullReferenceException("general")).deleted;
		/// <summary>
		/// Indicates whether this object is suspended from event processing.
		/// </summary>
		public boolean? suspended => (this.General ?? throw new NullReferenceException("general")).suspended;
		/// <summary>
		/// Timestamp from the action that deleted or suspended this object.
		/// </summary>
		public Date? since => (this.General ?? throw new NullReferenceException("general")).since;
	}