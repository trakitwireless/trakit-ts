

	/**
	 * A device, modem, or service which provides events from the field.
	 */
	export class Provider extends Compound implements INamed, IBelongCompany, IDeletable {
		/**
		 *  
		 */
		protected override Component[] Pieces => new Component[] {
			this.General,
			this.Advanced,
			this.Control,
		};

		/**
		 * Unique identifier of this device.
		 * {@link Asset.id}
		 */
		string id => this.General?.id
						?? this.Advanced?.id
						?? this.Control?.id
						?? throw new NullReferenceException("general");
		/**
		 * The company to which this device belongs.
		 * {@link Company.id}
		 */
		ulong company => this.General?.company
							?? this.Advanced?.company
							?? this.Control?.company
							?? throw new NullReferenceException("general");
		/**
		 * The kind of communication protocol this device uses.
		 */
		ProviderType kind => this.General?.kind
							?? throw new NullReferenceException("general");

		/**
		 *  
		 */
		General: ProviderGeneral;
		/**
		 * This thing's name.
		 *  <override max-length="100" />
		 */
		string name {
			get => (this.General ?? throw new NullReferenceException("general")).name;
			set => (this.General ?? throw new NullReferenceException("general")).name = value;
		}
		/**
		 * Notes about it.
		 */
		string notes {
			get => (this.General ?? throw new NullReferenceException("general")).notes;
			set => (this.General ?? throw new NullReferenceException("general")).notes = value;
		}
		/**
		 * The asset for which this device provides field data.
		 * {@link Asset.id}
		 */
		ulong? asset {
			get => (this.General ?? throw new NullReferenceException("general")).asset;
			set => (this.General ?? throw new NullReferenceException("general")).asset = value;
		}
		/**
		 * The provider's current (or pending) configuration profile.
		 * {@link ProviderConfig.id}
		 * {@link ProviderConfiguration.id}
		 */
		ulong configuration {
			get => (this.General ?? throw new NullReferenceException("general")).configuration;
			set => (this.General ?? throw new NullReferenceException("general")).configuration = value;
		}
		/**
		 * The password programmed on the device used to ensure the system is the only client authorized to make changes.
		 *  <override max-length="50" />
		 */
		string password {
			get => (this.General ?? throw new NullReferenceException("general")).password;
			set => (this.General ?? throw new NullReferenceException("general")).password = value;
		}
		/**
		 * The firmware/application version number.
		 *  <override max-length="100" />
		 */
		string firmware {
			get => (this.General ?? throw new NullReferenceException("general")).firmware;
			set => (this.General ?? throw new NullReferenceException("general")).firmware = value;
		}
		/**
		 * The phone number of this device.
		 *  <override format="phone" />
		 */
		ulong? phoneNumber {
			get => (this.General ?? throw new NullReferenceException("general")).phoneNumber;
			set => (this.General ?? throw new NullReferenceException("general")).phoneNumber = value;
		}
		/**
		 * A list of read-only values about the device like IMEI, ESN, firmware version, hardware revision, etc...
		 *  <override>
		 *  <keys>
		 * {@link DataName}
		 *  </keys>
		 *  </override>
		 */
		Map<string, string> information {
			get => (this.General ?? throw new NullReferenceException("general")).information;
			set => (this.General ?? throw new NullReferenceException("general")).information = value;
		}
		/**
		 * ICCID of the SIM card installed in this provider
		 */
		string sim {
			get => (this.General ?? throw new NullReferenceException("general")).sim;
			set => (this.General ?? throw new NullReferenceException("general")).sim = value;
		}

		/**
		 *  
		 */
		Advanced: ProviderAdvanced;
		/**
		 * The last IP address of the device.
		 *  <override type="System.String" format="ipv4" />
		 */
		IPEndPoint lastIP {
			get => (this.Advanced ?? throw new NullReferenceException("advanced")).lastIP;
			set => (this.Advanced ?? throw new NullReferenceException("advanced")).lastIP = value;
		}
		/**
		 * Often changing values like latitude, longitude, speed, wiring state, VBus information, etc...
		 */
		Map<string, Map<string, ProviderData>> attributes {
			get => (this.Advanced ?? throw new NullReferenceException("advanced")).attributes;
			set => (this.Advanced ?? throw new NullReferenceException("advanced")).attributes = value;
		}
		/**
		 * Store-and-forward information like last sequence number of SnF window
		 */
		Map<string, string> snf {
			get => (this.Advanced ?? throw new NullReferenceException("advanced")).snf;
			set => (this.Advanced ?? throw new NullReferenceException("advanced")).snf = value;
		}

		/**
		 *  
		 */
		Control: ProviderControl;
		/**
		 * Collection of commands for this provider.
		 */
		Map<ProviderCommandType, ProviderCommand> commands {
			get => (this.Control ?? throw new NullReferenceException("control")).commands;
			set => (this.Control ?? throw new NullReferenceException("control")).commands = value;
		}

		// IRequestable
		/**
		 * The {@link id} is the key.
		 */
getKey(): string { return this.id; }

		// ISuspendable and IDeletable
		/**
		 * Indicates whether this object was deleted.
		 */
		boolean? deleted => (this.General ?? throw new NullReferenceException("general")).deleted;
		/**
		 * Indicates whether this object is suspended from event processing.
		 */
		boolean? suspended => (this.General ?? throw new NullReferenceException("general")).suspended;
		/**
		 * Timestamp from the action that deleted or suspended this object.
		 */
		Date? since => (this.General ?? throw new NullReferenceException("general")).since;
	}