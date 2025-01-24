
	/**
	 * A base class for Dashcam meta-data.
	 */
	export abstract class DashcamBase implements IRequestable implements IFileSize {
		/**
		 * Number bytes in the dashcam media file.
		 */
		public bytes: ulong = NaN;
		/**
		 * Resolution defined in pixels.
		 */
		public size: Size;
		/**
		 * Unique identifier of the provider that sent the data.
		 * {@link Provider.id}
		 */
		public provider: string = "";
		/**
		 * Unique identifier of the company of the provider.
		 * {@link Company.id}
		 */
		public company: ulong = NaN;
		/**
		 * Unique identifier of the asset tied to the provider at the time.
		 * {@link Asset.id}
		 */
		public asset: ulong = NaN;
		/**
		 * Number assigned to the camera that took the image/video.
		 */
		public camera: byte = NaN;
		/**
		 * Latitude of the start of the resource.
		 */
		public latitude: double = NaN;
		/**
		 * Longitude of the start of the resource.
		 */
		public longitude: double = NaN;
		/**
		 * Speed of the start of the resource.
		 */
		public speed: double = NaN;
		/**
		 * Heading of the start of the resource.
		 */
		public heading: double = NaN;
		/**
		 * Altitude of the start of the resource.
		 */
		public altitude: double = NaN;

		// IRequestable
		/**
		 * For dashcams, this is either a unique identifier, or a combination of the <see cref="asset"/>, <see cref="provider"/>, and <see cref="camera"/> values.
		 *  <returns>A string unique for this type of object.</returns>
		 */
		public abstract string GetKey();
	}