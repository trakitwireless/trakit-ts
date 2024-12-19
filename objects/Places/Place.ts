

	/// <summary>
	/// A POI (point-of-interest) saved to the system to help determine an asset's real-world position.
	/// </summary>
	/// <override complex="true">
	/// <property name="anchor" type="Vorgon.LatLng">
	/// <summary>
	/// A central point of the shape.
	/// This is the exact centre of a <see cref="PlaceType.radial"/> and <see cref="PlaceType.point"/> shaped places, and the location of the pin on the map for all types.
	/// When routing, <see cref="PlaceType.polygon"/> and <see cref="PlaceType.rectangle"/> shapes use the anchor as the location within the place for deliveries.
	/// </summary>
	/// </property>
	/// <property name="radius" type="System.Double" nullable="true">
	/// <summary>
	/// This member is only present for <see cref="PlaceType.radial"/> shapes, and is the radius in meters from the centre anchor.
	/// </summary>
	/// </property>
	/// </override>
	export class Place extends Component implements IIdUlong, INamed, IIconic, IBelongCompany, ILabelled, IPictured, IDeletable {
		/// <summary>
		/// Unique identifier of this POI.
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// The company to which this POI belongs.
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong = NaN;
		/// <summary>
		/// The kind of geography represented by this POI.
		/// </summary>
		public kind: PlaceType;
		/// <summary>
		/// POI's common name instead of street address.
		/// </summary>
		/// <override max-length="100" />
		public name: string = "";
		/// <summary>
		/// Full street address including province/state, country, and postal/zip code.
		/// </summary>
		/// <override max-length="200" />
		public address: string = "";
		/// <summary>
		/// The icon used to display this POI in lists and on the map.
		/// </summary>
		/// <seealso cref="Icon.id" />
		public icon: ulong = NaN;
		/// <summary>
		/// Notes!
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// The codified names of labels
		/// </summary>
		/// <override>
		/// <values format="codified">
		/// <seealso cref="LabelStyle.code" />
		/// </values>
		/// </override>
		public labels: string[] = [];
		/// <summary>
		/// The fill colour given to this place for easy visual identification on the map (given in 24bit hex; #RRGGBB)
		/// </summary>
		/// <override max-length="22" format="colour" />
		public colour: string = "";
		/// <summary>
		/// Images of this POI.
		/// </summary>
		/// <override>
		/// <values>
		/// <seealso cref="Picture.id" />
		/// </values>
		/// </override>
		public pictures: ulong[] = [];
		/// <summary>
		/// A custom field used to refer to an external system.
		/// </summary>
		/// <override max-length="100" />
		public reference: string = "";

		/// <summary>
		/// Central lat/long coordinates.
		/// </summary>
		public anchor: LatLng;
		/// <summary>
		/// Boundary threshold (in meters)
		/// </summary>
		public radius: double = NaN;
		/// <summary>
		/// A list of points forming a non-self-intersecting polygon.
		/// </summary>
		public points: LatLng[] = [];

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
		public deleted: boolean = false;
		/// <summary>
		/// Timestamp from the action that deleted or suspended this object.
		/// </summary>
		public since: Date = DATE();
	}