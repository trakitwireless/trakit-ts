

	/**
	 * Often changing details about a thing.
	 */
	export class AssetAdvanced extends Component implements IIdUlong, IBelongCompany {
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
		 * The things GPS coordinates including speed, bearing, and street information.
		 */
		public position: Position;
		/**
		 * The cumulative distance travelled in kilometres.
		 */
		public odometer: double = NaN;
		/**
		 * The codified status tag names.
		 *  <override>
		 *  <values format="codified">
		 * {@link LabelStyle.code}
		 *  </values>
		 *  </override>
		 */
		public tags: string[] = [];
		/**
		 * A list of attributes given to this asset by the connection device such as wiring state, VBus, etc.
		 *  <override>
		 *  <keys format="codified">
		 * {@link AssetAttribute.name}
		 *  </keys>
		 *  </override>
		 */
		public attributes: Map<string, AssetAttribute>;
		/**
		 * The list of devices providing events for this asset.
		 *  <override readonly="true">
		 *  <values>
		 * {@link Provider.id}
		 *  </values>
		 *  </override>
		 */
		public providers: string[] = [];
		/**
		 * A list of assets related to this one; like a Person for a Vehicle (driver).
		 *  <override>
		 *  <values>
		 * {@link Asset.id}
		 *  </values>
		 *  </override>
		 */
		public relationships: ulong[] = [];
		/**
		 * The current state of this asset's interaction with known Places.
		 *  <override>
		 *  <keys>
		 * {@link Place.id}
		 *  </keys>
		 *  </override>
		 */
		public places: Map<ulong, AssetPlaceStatus>;

		// IRequestable
		/**
		 * The <see cref="id"/> is the key.
		 */
public getKey(): string { return this.id.toString(); }
	}