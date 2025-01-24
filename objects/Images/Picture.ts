

	/**
	 * An image stored by the system.
	 */
	export class Picture extends Component implements IIdUlong, INamed, IBelongCompany, IFileSize, IDeletable {
		/**
		 * Unique identifier of this image.
		 */
		id: ulong = NaN;
		/**
		 * The company to which this image belongs.
		 * {@link Company.id}
		 */
		company: ulong = NaN;
		/**
		 * The file name of this image.
		 *  <override max-length="100" />
		 */
		name: string = "";
		/**
		 * Notes about this image.
		 */
		notes: string = "";
		/**
		 * The URL/path to find this image.
		 *  <override max-length="200" />
		 */
		src: string = "";
		/**
		 * Resolution defined in pixels.
		 */
		size: Size;
		/**
		 * A list of focal points in the images like faces.
		 */
		focals: Square[] = [];
		/**
		 * The file-size on the disk.
		 */
		bytes: ulong = NaN;
		/**
		 * A count of the times this image was used for something (asset, contact, task, etc).
		 */
		uses: uint = NaN;

		// IRequestable
		/**
		 * The <see cref="id"/> is the key.
		 */
public getKey(): string { return this.id.toString(); }

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