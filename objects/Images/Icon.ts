

	/// <summary>
	/// A visual representation of a thing on a map or in a list.
	/// </summary>
	export class Icon extends Component implements IIdUlong, INamed, IBelongCompany, IGlobal, IDeletable {
		/// <summary>
		/// Unique identifier of this icon.
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// The company to which this icon belongs.
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong = NaN;

		/// <summary>
		/// A noun to describe the type of thing represented.  Like Truck, Car, Trailer, Hot-Air Balloon, etc...
		/// </summary>
		/// <override max-length="100" />
		public category: string = "";
		/// <summary>
		/// A specific adjective to describe the thing.  Like Blue, Red, Empty, Full, etc...
		/// </summary>
		/// <override max-length="100" />
		public name: string = "";
		/// <summary>
		/// Notes.
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// Indicates whether this icon is available to child companies.
		/// </summary>
		public global: boolean = false;
		/// <summary>
		/// A list of things that this icon can be used to represent.  Like asset, place, user, etc...
		/// </summary>
		public usage: string[] = [];
		/// <summary>
		/// Definition for the name bubble above the icon on a map.
		/// </summary>
		public label: IconLabel;
		/// <summary>
		/// Where the notification will appear for a mapped icon.
		/// Such as the number of dispatches an asset is working on, or the number of dispatches at a place.
		/// </summary>
		public badge: IconLabel;
		/// <summary>
		/// The images used to show the detail of this icon.
		/// </summary>
		public glyphs: IconGlyph[] = [];

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