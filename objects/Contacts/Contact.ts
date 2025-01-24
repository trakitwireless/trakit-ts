

	/**
	 * Contact information.
	 */
	export class Contact extends Component implements IIdUlong, INamed, IBelongCompany, IPictured, IDeletable {
		/**
		 * Unique identifier of this contact.
		 */
		public id: ulong = NaN;
		/**
		 * The company to which this contact belongs
		 * {@link Company.id}
		 */
		public company: ulong = NaN;
		/**
		 * The person's name
		 *  <override max-length="100" />
		 */
		public name: string = "";
		/**
		 * Notes about this person.
		 */
		public notes: string = "";
		/**
		 * A collection of other names this person might go by.
		 * Use the object key like a name identifier.
		 * Example keys: Initials, Nickname, Maiden Name, etc.
		 *  <override>
		 *  <values max-length="254" />
		 *  </override>
		 */
		public otherNames: Map<string, string>;
		/**
		 * Email addresses.
		 * Use the object key like a name of the address.
		 * Example keys: Home, Work, Support, Old, etc.
		 *  <override>
		 *  <values max-length="254" format="email" />
		 *  </override>
		 */
		public emails: Map<string, string>;
		/**
		 * Phone numbers.
		 * Use the object key like a name of the phone number.
		 * Example keys: Mobile, Fax, Home, Office, etc.
		 *  <override>
		 *  <values format="phone" />
		 *  </override>
		 */
		public phones: Map<string, ulong>;
		/**
		 * Mailing addresses.
		 * Use the object key like a name of the address.
		 * Example keys: Home, Work, Park, etc.
		 */
		public addresses: Map<string, string>;
		/**
		 * Websites and other online resources.
		 * Use the object key like a name of the address.
		 * Example keys: Downloads, Support, FTP, etc.
		 *  <override>
		 *  <values type="System.String" max-length="254" format="url" />
		 *  </override>
		 */
		public urls: Map<string, Uri>;
		/**
		 * Date information.
		 * Use the object key like a name of the date.
		 * Example keys: Birthday, Started Date, Retired On, etc.
		 */
		public dates: Map<string, Date>;
		/**
		 * Uncategorized information.
		 * Use the object keys and values however you'd like.
		 */
		public options: Map<string, string>;
		/**
		 * A list of roles they play in the Company.
		 *  <override format="codified" />
		 */
		public roles: string[] = [];
		/**
		 * Pictures of this Contact.
		 *  <override>
		 *  <values>
		 * {@link Picture.id}
		 *  </values>
		 *  </override>
		 */
		public pictures: ulong[] = [];

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