

	/**
	 * The full details of an Asset, containing all the properties from the {@link AssetGeneral} and {@link AssetAdvanced} objects.
	 */
	export class Asset extends Compound implements IIdUlong, INamed, IIconic, IBelongCompany, ILabelled, IPictured, ISuspendable, IDeletable {
		/**
		 *  
		 */
		protected override Component[] Pieces => new Component[] {
			this.General,
			this.Advanced,
			this.Dispatch,
		};

		/**
		 * Unique identifier of this asset.
		 * {@link Asset.id}
		 */
		ulong id => this.General?.id
						?? this.Advanced?.id
						?? this.Dispatch?.id
						?? throw new NullReferenceException("general");
		/**
		 * The company to which this asset belongs.
		 * {@link Company.id}
		 */
		ulong company => this.General?.company
							?? this.Advanced?.company
							?? this.Dispatch?.company
							?? throw new NullReferenceException("general");
		/**
		 * Type of asset.
		 */
		AssetType kind => this.General?.kind
							?? throw new NullReferenceException("general");

		/**
		 *  
		 */
		General: AssetGeneral;
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
		 * The icon that represents this asset on the map and in lists.
		 * {@link Icon.id}
		 */
		ulong icon {
			get => (this.General ?? throw new NullReferenceException("general")).icon;
			set => (this.General ?? throw new NullReferenceException("general")).icon = value;
		}
		/**
		 * Codified label names.
		 *  <override>
		 *  <values format="codified">
		 * {@link LabelStyle.code}
		 *  </values>
		 *  </override>
		 */
		string[] labels {
			get => (this.General ?? throw new NullReferenceException("general")).labels;
			set => (this.General ?? throw new NullReferenceException("general")).labels = value;
		}
		/**
		 * A list of photos of this thing.
		 *  <override>
		 *  <values>
		 * {@link Picture.id}
		 *  </values>
		 *  </override>
		 */
		ulong[] pictures {
			get => (this.General ?? throw new NullReferenceException("general")).pictures;
			set => (this.General ?? throw new NullReferenceException("general")).pictures = value;
		}
		/**
		 * The fall-back address which is used to send Messages if the asset is a Person and has no Contact phone or email.
		 *  <override max-length="254" />
		 */
		string messagingAddress {
			get => (this.General ?? throw new NullReferenceException("general")).messagingAddress;
			set => (this.General ?? throw new NullReferenceException("general")).messagingAddress = value;
		}
		/**
		 * Name/value collections of custom fields used to refer to external systems.
		 *  <override max-count="10">
		 *  <keys max-length="20" />
		 *  <values max-length="100" />
		 *  </override>
		 */
		Map<string, string> references {
			get => (this.General ?? throw new NullReferenceException("general")).references;
			set => (this.General ?? throw new NullReferenceException("general")).references = value;
		}

		/**
		 *  
		 */
		Advanced: AssetAdvanced;
		/**
		 * The things GPS coordinates including speed, bearing, and street information.
		 */
		Position position {
			get => (this.Advanced ?? throw new NullReferenceException("advanced")).position;
			set => (this.Advanced ?? throw new NullReferenceException("advanced")).position = value;
		}
		/**
		 * The cumulative distance travelled in kilometres.
		 */
		double odometer {
			get => (this.Advanced ?? throw new NullReferenceException("advanced")).odometer;
			set => (this.Advanced ?? throw new NullReferenceException("advanced")).odometer = value;
		}
		/**
		 * The codified status tag names.
		 *  <override>
		 *  <values format="codified">
		 * {@link LabelStyle.code}
		 *  </values>
		 *  </override>
		 */
		string[] tags {
			get => (this.Advanced ?? throw new NullReferenceException("advanced")).tags;
			set => (this.Advanced ?? throw new NullReferenceException("advanced")).tags = value;
		}
		/**
		 * A list of attributes given to this asset by the connection device such as wiring state, VBus, etc.
		 *  <override>
		 *  <keys format="codified">
		 * {@link AssetAttribute.name}
		 *  </keys>
		 *  </override>
		 */
		Map<string, AssetAttribute> attributes {
			get => (this.Advanced ?? throw new NullReferenceException("advanced")).attributes;
			set => (this.Advanced ?? throw new NullReferenceException("advanced")).attributes = value;
		}
		/**
		 * The list of devices providing events for this asset.
		 *  <override readonly="true">
		 *  <values>
		 * {@link Provider.id}
		 *  </values>
		 *  </override>
		 */
		string[] providers {
			get => (this.Advanced ?? throw new NullReferenceException("advanced")).providers;
			set => (this.Advanced ?? throw new NullReferenceException("advanced")).providers = value;
		}
		/**
		 * A list of assets related to this one; like a Person for a Vehicle (driver).
		 *  <override>
		 *  <values>
		 * {@link Asset.id}
		 *  </values>
		 *  </override>
		 */
		ulong[] relationships {
			get => (this.Advanced ?? throw new NullReferenceException("advanced")).relationships;
			set => (this.Advanced ?? throw new NullReferenceException("advanced")).relationships = value;
		}
		/**
		 * The current state of this asset's interaction with known Places.
		 *  <override>
		 *  <keys>
		 * {@link Place.id}
		 *  </keys>
		 *  </override>
		 */
		Map<ulong, AssetPlaceStatus> places {
			get => (this.Advanced ?? throw new NullReferenceException("advanced")).places;
			set => (this.Advanced ?? throw new NullReferenceException("advanced")).places = value;
		}

		/**
		 *  
		 */
		Dispatch: AssetDispatch;

		// IRequestable
		/**
		 * The {@link id} is the key.
		 */
getKey(): string { return this.id.toString(); }

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