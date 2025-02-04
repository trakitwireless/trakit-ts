

	/**
	 * Often changing details about a thing.
	 */
	export class AssetAdvanced extends Component implements IIdUlong, IBelongCompany {
		/**
		 * Unique identifier of this asset.
		 * {@link Asset.id}
		 */
		id: ulong = NaN;
		/**
		 * The company to which this asset belongs.
		 * {@link Company.id}
		 */
		company: ulong = NaN;
		/**
		 * The things GPS coordinates including speed, bearing, and street information.
		 */
		position: Position;
		/**
		 * The cumulative distance travelled in kilometres.
		 */
		odometer: double = NaN;
		/**
		 * The codified status tag names.
		 *  <override>
		 *  <values format="codified">
		 * {@link LabelStyle.code}
		 *  </values>
		 *  </override>
		 */
		tags: string[] = [];
		/**
		 * A list of attributes given to this asset by the connection device such as wiring state, VBus, etc.
		 *  <override>
		 *  <keys format="codified">
		 * {@link AssetAttribute.name}
		 *  </keys>
		 *  </override>
		 */
		attributes: Map<string, AssetAttribute>;
		/**
		 * The list of devices providing events for this asset.
		 *  <override readonly="true">
		 *  <values>
		 * {@link Provider.id}
		 *  </values>
		 *  </override>
		 */
		providers: string[] = [];
		/**
		 * A list of assets related to this one; like a Person for a Vehicle (driver).
		 *  <override>
		 *  <values>
		 * {@link Asset.id}
		 *  </values>
		 *  </override>
		 */
		relationships: ulong[] = [];
		/**
		 * The current state of this asset's interaction with known Places.
		 *  <override>
		 *  <keys>
		 * {@link Place.id}
		 *  </keys>
		 *  </override>
		 */
		places: Map<ulong, AssetPlaceStatus>;

		// IRequestable
		/**
		 * The {@link id} is the key.
		 */
getKey(): string { return this.id.toString(); }
	}