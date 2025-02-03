

	/**
	 * Parameters used to create or update an {@link ProviderConfig}.
	 */
	export class ParamProviderConfigMerge extends ParamMergeSubscribable {
		/**
		 * The unique identifier of the {@link ProviderConfig} you want to update.
		 * Leave this as <c>null</c> when creating a new {@link ProviderConfig}.
		 */
		id: ulong = NaN;
		/**
		 * The {@link Company} to which this {@link ProviderConfig} belongs.
		 * After creation, this value is read-only.
		 */
		company: ulong = NaN;
		/**
		 * Name for the {@link ProviderConfig}.
		 */
		name: string = "";
		/**
		 * Notes for the {@link ProviderConfig}.
		 */
		notes: string = "";
		/**
		 * A collection of other names this person might go by.
		 * Use the object key like a name identifier.
		 * Example keys: Initials, Nickname, Maiden Name, etc.
		 */
		otherNames: Map<string, string>;
		/**
		 * Email addresses
		 * Use the object key like a name of the address.
		 * Example keys: Home, Work, Support, Old, etc.
		 */
		emails: Map<string, string>;
		/**
		 * Phone numbers.
		 * Use the object key like a name of the phone number.
		 * Example keys: Mobile, Fax, Home, Office, etc.
		 */
		phones: Map<string, ulong?>;
		/**
		 * Mailing addresses
		 * Use the object key like a name of the address.
		 * Example keys: Home, Work, Park, etc.
		 */
		addresses: Map<string, string>;
		/**
		 * Websites and other online resources
		 * Use the object key like a name of the address.
		 * Example keys: Downloads, Support, FTP, etc.
		 */
		urls: Map<string, Uri>;
		/**
		 * Date information
		 * Use the object key like a name of the date.
		 * Example keys: Birthday, Started Date, Retired On, etc.
		 */
		dates: Map<string, Date?>;
		/**
		 * Uncategorized information
		 * Use the object keys and values however you'd like.
		 */
		options: Map<string, string>;
		/**
		 * A list of roles they play in the {@link Company}.
		 */
		roles: string[] = [];
		/**
		 *  {@link Picture}s of this {@link ProviderConfig}.
		 */
		pictures: ulong[] = [];
	}