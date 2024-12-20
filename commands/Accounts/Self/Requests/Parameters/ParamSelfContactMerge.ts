

	/// <summary>
	/// Parameters for a <see cref="User"/> to update their own <see cref="Contact"/>.
	/// </summary>
	export class ParamSelfContactMerge extends ParamMergeSubscribable {
		/// <summary>
		/// Name for yourself.
		/// </summary>
		public name: string = "";
		/// <summary>
		/// Notes for yourself.
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// A collection of other names this person might go by.
		/// Use the object key like a name identifier.
		/// Example keys: Initials, Nickname, Maiden Name, etc.
		/// </summary>
		public otherNames: Map<string, string>;
		/// <summary>
		/// Email addresses
		/// Use the object key like a name of the address.
		/// Example keys: Home, Work, Support, Old, etc.
		/// </summary>
		public emails: Map<string, string>;
		/// <summary>
		/// Phone numbers.
		/// Use the object key like a name of the phone number.
		/// Example keys: Mobile, Fax, Home, Office, etc.
		/// </summary>
		public phones: Map<string, ulong?>;
		/// <summary>
		/// Mailing addresses
		/// Use the object key like a name of the address.
		/// Example keys: Home, Work, Park, etc.
		/// </summary>
		public addresses: Map<string, string>;
		/// <summary>
		/// Websites and other online resources
		/// Use the object key like a name of the address.
		/// Example keys: Downloads, Support, FTP, etc.
		/// </summary>
		public urls: Map<string, Uri>;
		/// <summary>
		/// Date information
		/// Use the object key like a name of the date.
		/// Example keys: Birthday, Started Date, Retired On, etc.
		/// </summary>
		public dates: Map<string, Date?>;
		/// <summary>
		/// Uncategorized information
		/// Use the object keys and values however you'd like.
		/// </summary>
		public options: Map<string, string>;
		/// <summary>
		/// A list of roles they play in the <see cref="Company"/>.
		/// </summary>
		public roles: string[] = [];
		/// <summary>
		/// <see cref="Picture"/>s of yourself.
		/// </summary>
		public pictures: ulong[] = [];
	}