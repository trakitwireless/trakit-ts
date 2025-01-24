

	/**
	 * An image stored by the system.
	 */
	export class Picture extends Component implements IIdUlong, INamed, IBelongCompany, IFileSize, IDeletable {
		/**
		 * Unique identifier of this image.
		 */
		public id: ulong = NaN;
		/**
		 * The company to which this image belongs.
		 * {@link Company.id}
		 */
		public company: ulong = NaN;
		/**
		 * The file name of this image.
		 *  <override max-length="100" />
		 */
		public name: string = "";
		/**
		 * Notes about this image.
		 */
		public notes: string = "";
		/**
		 * The URL/path to find this image.
		 *  <override max-length="200" />
		 */
		public src: string = "";
		/**
		 * Resolution defined in pixels.
		 */
		public size: Size;
		/**
		 * A list of focal points in the images like faces.
		 */
		public focals: Square[] = [];
		/**
		 * The file-size on the disk.
		 */
		public bytes: ulong = NaN;
		/**
		 * A count of the times this image was used for something (asset, contact, task, etc).
		 */
		public uses: uint = NaN;

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