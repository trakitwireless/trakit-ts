

	/**
	 * A POI (point-of-interest) saved to the system to help determine an asset's real-world position.
	 *  <override complex="true">
	 *  <property name="anchor" type="Vorgon.LatLng">
	 */
	/**
	 * A central point of the shape.
	 * This is the exact centre of a <see cref="PlaceType.radial"/> and <see cref="PlaceType.point"/> shaped places, and the location of the pin on the map for all types.
	 * When routing, <see cref="PlaceType.polygon"/> and <see cref="PlaceType.rectangle"/> shapes use the anchor as the location within the place for deliveries.
	 *  </property>
	 *  <property name="radius" type="System.Double" nullable="true">
	 */
	/**
	 * This member is only present for <see cref="PlaceType.radial"/> shapes, and is the radius in meters from the centre anchor.
	 *  </property>
	 *  </override>
	 */
	export class Place extends Component implements IIdUlong, INamed, IIconic, IBelongCompany, ILabelled, IPictured, IDeletable {
		/**
		 * Unique identifier of this POI.
		 */
		public id: ulong = NaN;
		/**
		 * The company to which this POI belongs.
		 * {@link Company.id}
		 */
		public company: ulong = NaN;
		/**
		 * The kind of geography represented by this POI.
		 */
		public kind: PlaceType;
		/**
		 * POI's common name instead of street address.
		 *  <override max-length="100" />
		 */
		public name: string = "";
		/**
		 * Full street address including province/state, country, and postal/zip code.
		 *  <override max-length="200" />
		 */
		public address: string = "";
		/**
		 * The icon used to display this POI in lists and on the map.
		 * {@link Icon.id}
		 */
		public icon: ulong = NaN;
		/**
		 * Notes!
		 */
		public notes: string = "";
		/**
		 * The codified names of labels
		 *  <override>
		 *  <values format="codified">
		 * {@link LabelStyle.code}
		 *  </values>
		 *  </override>
		 */
		public labels: string[] = [];
		/**
		 * The fill colour given to this place for easy visual identification on the map (given in 24bit hex; #RRGGBB)
		 *  <override max-length="22" format="colour" />
		 */
		public colour: string = "";
		/**
		 * Images of this POI.
		 *  <override>
		 *  <values>
		 * {@link Picture.id}
		 *  </values>
		 *  </override>
		 */
		public pictures: ulong[] = [];
		/**
		 * A custom field used to refer to an external system.
		 *  <override max-length="100" />
		 */
		public reference: string = "";

		/**
		 * Central lat/long coordinates.
		 */
		public anchor: LatLng;
		/**
		 * Boundary threshold (in meters)
		 */
		public radius: double = NaN;
		/**
		 * A list of points forming a non-self-intersecting polygon.
		 */
		public points: LatLng[] = [];

		// IRequestable
		/**
		 * The <see cref="id"/> is the key.
		 */
public getKey(): string { return this.id.toString(); }

		// IDeletable
		/**
		 * Indicates whether this object was deleted.
		 */
		public deleted: boolean = false;
		/**
		 * Timestamp from the action that deleted or suspended this object.
		 */
		public since: Date = DATE();
	}