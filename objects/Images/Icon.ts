

	/**
	 * A visual representation of a thing on a map or in a list.
	 */
	export class Icon extends Component implements IIdUlong, INamed, IBelongCompany, IGlobal, IDeletable {
		/**
		 * Unique identifier of this icon.
		 */
		public id: ulong = NaN;
		/**
		 * The company to which this icon belongs.
		 * {@link Company.id}
		 */
		public company: ulong = NaN;

		/**
		 * A noun to describe the type of thing represented.  Like Truck, Car, Trailer, Hot-Air Balloon, etc...
		 *  <override max-length="100" />
		 */
		public category: string = "";
		/**
		 * A specific adjective to describe the thing.  Like Blue, Red, Empty, Full, etc...
		 *  <override max-length="100" />
		 */
		public name: string = "";
		/**
		 * Notes.
		 */
		public notes: string = "";
		/**
		 * Indicates whether this icon is available to child companies.
		 */
		public global: boolean = false;
		/**
		 * A list of things that this icon can be used to represent.  Like asset, place, user, etc...
		 */
		public usage: string[] = [];
		/**
		 * Definition for the name bubble above the icon on a map.
		 */
		public label: IconLabel;
		/**
		 * Where the notification will appear for a mapped icon.
		 * Such as the number of dispatches an asset is working on, or the number of dispatches at a place.
		 */
		public badge: IconLabel;
		/**
		 * The images used to show the detail of this icon.
		 */
		public glyphs: IconGlyph[] = [];

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