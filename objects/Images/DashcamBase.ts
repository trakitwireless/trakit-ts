
	/**
	 * A base class for Dashcam meta-data.
	 */
	export abstract class DashcamBase implements IRequestable implements IFileSize {
		/**
		 * Number bytes in the dashcam media file.
		 */
		bytes: ulong = NaN;
		/**
		 * Resolution defined in pixels.
		 */
		size: Size;
		/**
		 * Unique identifier of the provider that sent the data.
		 * {@link Provider.id}
		 */
		provider: string = "";
		/**
		 * Unique identifier of the company of the provider.
		 * {@link Company.id}
		 */
		company: ulong = NaN;
		/**
		 * Unique identifier of the asset tied to the provider at the time.
		 * {@link Asset.id}
		 */
		asset: ulong = NaN;
		/**
		 * Number assigned to the camera that took the image/video.
		 */
		camera: byte = NaN;
		/**
		 * Latitude of the start of the resource.
		 */
		latitude: double = NaN;
		/**
		 * Longitude of the start of the resource.
		 */
		longitude: double = NaN;
		/**
		 * Speed of the start of the resource.
		 */
		speed: double = NaN;
		/**
		 * Heading of the start of the resource.
		 */
		heading: double = NaN;
		/**
		 * Altitude of the start of the resource.
		 */
		altitude: double = NaN;

		// IRequestable
		/**
		 * For dashcams, this is either a unique identifier, or a combination of the {@link asset}, {@link provider}, and {@link camera} values.
		 *  <returns>A string unique for this type of object.</returns>
		 */
		abstract string GetKey();
	}