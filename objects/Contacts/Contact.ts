

	/// <summary>
	/// Contact information.
	/// </summary>
	export class Contact extends Component implements IIdUlong, INamed, IBelongCompany, IPictured, IDeletable {
		/// <summary>
		/// Unique identifier of this contact.
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// The company to which this contact belongs
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong = NaN;
		/// <summary>
		/// The person's name
		/// </summary>
		/// <override max-length="100" />
		public name: string = "";
		/// <summary>
		/// Notes about this person.
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// A collection of other names this person might go by.
		/// Use the object key like a name identifier.
		/// Example keys: Initials, Nickname, Maiden Name, etc.
		/// </summary>
		/// <override>
		/// <values max-length="254" />
		/// </override>
		public otherNames: Map<string, string>;
		/// <summary>
		/// Email addresses.
		/// Use the object key like a name of the address.
		/// Example keys: Home, Work, Support, Old, etc.
		/// </summary>
		/// <override>
		/// <values max-length="254" format="email" />
		/// </override>
		public emails: Map<string, string>;
		/// <summary>
		/// Phone numbers.
		/// Use the object key like a name of the phone number.
		/// Example keys: Mobile, Fax, Home, Office, etc.
		/// </summary>
		/// <override>
		/// <values format="phone" />
		/// </override>
		public phones: Map<string, ulong>;
		/// <summary>
		/// Mailing addresses.
		/// Use the object key like a name of the address.
		/// Example keys: Home, Work, Park, etc.
		/// </summary>
		public addresses: Map<string, string>;
		/// <summary>
		/// Websites and other online resources.
		/// Use the object key like a name of the address.
		/// Example keys: Downloads, Support, FTP, etc.
		/// </summary>
		/// <override>
		/// <values type="System.String" max-length="254" format="url" />
		/// </override>
		public urls: Map<string, Uri>;
		/// <summary>
		/// Date information.
		/// Use the object key like a name of the date.
		/// Example keys: Birthday, Started Date, Retired On, etc.
		/// </summary>
		public dates: Map<string, Date>;
		/// <summary>
		/// Uncategorized information.
		/// Use the object keys and values however you'd like.
		/// </summary>
		public options: Map<string, string>;
		/// <summary>
		/// A list of roles they play in the Company.
		/// </summary>
		/// <override format="codified" />
		public roles: string[] = [];
		/// <summary>
		/// Pictures of this Contact.
		/// </summary>
		/// <override>
		/// <values>
		/// <seealso cref="Picture.id" />
		/// </values>
		/// </override>
		public pictures: ulong[] = [];

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