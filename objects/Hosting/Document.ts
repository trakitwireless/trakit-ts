

	/**
	 * A file stored temporarily by the system.
	 */
	export class Document extends Component implements IIdUlong, INamed, IBelongCompany, IFileSize, IDeletable {
		/**
		 * Unique identifier of this file.
		 */
		id: ulong = NaN;
		/**
		 * The company to which this file belongs.
		 * {@link Company.id}
		 */
		company: ulong = NaN;
		/**
		 * The file name of this file.
		 *  <override max-length="100" />
		 */
		name: string = "";
		/**
		 * Notes about this file.
		 */
		notes: string = "";
		/**
		 * The URL/path to find this file.
		 *  <override max-length="200" />
		 */
		src: string = "";
		/**
		 * The file-size on the disk.
		 */
		bytes: ulong = NaN;
		/**
		 * The MIME type of the file.
		 *  <override max-length="50" />
		 */
		mime: string = "";
		/**
		 * The date and time this fill will be automatically purged from our system.
		 */
		expiry: Date = DATE();
		/**
		 * Name/value collections of custom fields used to refer to external systems.
		 *  <override max-count="10">
		 *  <keys max-length="20" />
		 *  <values max-length="100" />
		 *  </override>
		 */
		references: Map<string, string>;

		// IRequestable
		/**
		 * The {@link id} is the key.
		 */
getKey(): string { return this.id.toString(); }

		// IDeletable
		/**
		 * Indicates whether this object was deleted.
		 */
		deleted: boolean = false;
		/**
		 * Timestamp from the action that deleted or suspended this object.
		 */
		since: Date = DATE();
	}