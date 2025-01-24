

	/**
	 * Seldom changing details about a thing.
	 */
	export class AssetGeneral extends Component implements IIdUlong, INamed, IIconic, IBelongCompany, ILabelled, IPictured, ISuspendable, IDeletable {
		/**
		 * Unique identifier of this asset.
		 * {@link Asset.id}
		 */
		public id: ulong = NaN;
		/**
		 * The company to which this asset belongs.
		 * {@link Company.id}
		 */
		public company: ulong = NaN;
		/**
		 * Type of asset.
		 */
		public kind: AssetType;
		/**
		 * This thing's name.
		 *  <override max-length="100" />
		 */
		public name: string = "";
		/**
		 * The icon that represents this asset on the map and in lists.
		 * {@link Icon.id}
		 */
		public icon: ulong = NaN;
		/**
		 * Notes about it.
		 */
		public notes: string = "";
		/**
		 * Codified label names.
		 *  <override>
		 *  <values format="codified">
		 * {@link LabelStyle.code}
		 *  </values>
		 *  </override>
		 */
		public labels: string[] = [];
		/**
		 * A list of photos of this thing.
		 *  <override>
		 *  <values>
		 * {@link Picture.id}
		 *  </values>
		 *  </override>
		 */
		public pictures: ulong[] = [];
		/**
		 * The fall-back address which is used to send Messages if the asset is a Person and has no Contact phone or email.
		 *  <override max-length="254" />
		 */
		public messagingAddress: string = "";
		/**
		 * Name/value collections of custom fields used to refer to external systems.
		 *  <override max-count="10">
		 *  <keys max-length="20" />
		 *  <values max-length="100" />
		 *  </override>
		 */
		public references: Map<string, string>;

		// IRequestable
		/**
		 * The <see cref="id"/> is the key.
		 */
public getKey(): string { return this.id.toString(); }

		// ISuspendable and IDeletable
		/**
		 * Indicates whether this object was deleted.
		 */
		public deleted: boolean = false;
		/**
		 * Indicates whether this object is suspended from event processing.
		 */
		public suspended: boolean = false;
		/**
		 * Timestamp from the action that deleted or suspended this object.
		 */
		public since: Date = DATE();
	}