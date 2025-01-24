

	/**
	 * Parameters for a <see cref="User"/> to update their own <see cref="Contact"/>.
	 */
	export class ParamSelfContactMerge extends ParamMergeSubscribable {
		/**
		 * Name for yourself.
		 */
		public name: string = "";
		/**
		 * Notes for yourself.
		 */
		public notes: string = "";
		/**
		 * A collection of other names this person might go by.
		 * Use the object key like a name identifier.
		 * Example keys: Initials, Nickname, Maiden Name, etc.
		 */
		public otherNames: Map<string, string>;
		/**
		 * Email addresses
		 * Use the object key like a name of the address.
		 * Example keys: Home, Work, Support, Old, etc.
		 */
		public emails: Map<string, string>;
		/**
		 * Phone numbers.
		 * Use the object key like a name of the phone number.
		 * Example keys: Mobile, Fax, Home, Office, etc.
		 */
		public phones: Map<string, ulong?>;
		/**
		 * Mailing addresses
		 * Use the object key like a name of the address.
		 * Example keys: Home, Work, Park, etc.
		 */
		public addresses: Map<string, string>;
		/**
		 * Websites and other online resources
		 * Use the object key like a name of the address.
		 * Example keys: Downloads, Support, FTP, etc.
		 */
		public urls: Map<string, Uri>;
		/**
		 * Date information
		 * Use the object key like a name of the date.
		 * Example keys: Birthday, Started Date, Retired On, etc.
		 */
		public dates: Map<string, Date?>;
		/**
		 * Uncategorized information
		 * Use the object keys and values however you'd like.
		 */
		public options: Map<string, string>;
		/**
		 * A list of roles they play in the <see cref="Company"/>.
		 */
		public roles: string[] = [];
		/**
		 *  <see cref="Picture"/>s of yourself.
		 */
		public pictures: ulong[] = [];
	}