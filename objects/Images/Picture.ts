

	/// <summary>
	/// An image stored by the system.
	/// </summary>
	export class Picture extends Component implements IIdUlong, INamed, IBelongCompany, IFileSize, IDeletable {
		/// <summary>
		/// Unique identifier of this image.
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// The company to which this image belongs.
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong = NaN;
		/// <summary>
		/// The file name of this image.
		/// </summary>
		/// <override max-length="100" />
		public name: string = "";
		/// <summary>
		/// Notes about this image.
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// The URL/path to find this image.
		/// </summary>
		/// <override max-length="200" />
		public src: string = "";
		/// <summary>
		/// Resolution defined in pixels.
		/// </summary>
		public size: Size;
		/// <summary>
		/// A list of focal points in the images like faces.
		/// </summary>
		public focals: Square[] = [];
		/// <summary>
		/// The file-size on the disk.
		/// </summary>
		public bytes: ulong = NaN;
		/// <summary>
		/// A count of the times this image was used for something (asset, contact, task, etc).
		/// </summary>
		public uses: uint = NaN;

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