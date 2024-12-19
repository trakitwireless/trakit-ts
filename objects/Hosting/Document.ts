

	/// <summary>
	/// A file stored temporarily by the system.
	/// </summary>
	export class Document extends Component implements IIdUlong, INamed, IBelongCompany, IFileSize, IDeletable {
		/// <summary>
		/// Unique identifier of this file.
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// The company to which this file belongs.
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong = NaN;
		/// <summary>
		/// The file name of this file.
		/// </summary>
		/// <override max-length="100" />
		public name: string = "";
		/// <summary>
		/// Notes about this file.
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// The URL/path to find this file.
		/// </summary>
		/// <override max-length="200" />
		public src: string = "";
		/// <summary>
		/// The file-size on the disk.
		/// </summary>
		public bytes: ulong = NaN;
		/// <summary>
		/// The MIME type of the file.
		/// </summary>
		/// <override max-length="50" />
		public mime: string = "";
		/// <summary>
		/// The date and time this fill will be automatically purged from our system.
		/// </summary>
		public expiry: Date = DATE();
		/// <summary>
		/// Name/value collections of custom fields used to refer to external systems.
		/// </summary>
		/// <override max-count="10">
		/// <keys max-length="20" />
		/// <values max-length="100" />
		/// </override>
		public references: Map<string, string>;

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