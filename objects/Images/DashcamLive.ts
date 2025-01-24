

	/**
	 * A live snapshot a dashcam-enabled provider or asset.
	 */
	export class DashcamLive extends DashcamBase {
		/**
		 * The type of data being stored.
		 *  <override value="image" />
		 */
		public readonly DashcamMediaType kind = DashcamMediaType.image;
		/**
		 * Timestamp of this live camera image.
		 */
		public dts: Date = DATE();

		// IRequestable
		/**
		 * A combination of the asset, provider, and camera number.
		 */
public override string GetKey() => (this.asset ?? ulong.MinValue)
									+ "-" + this.provider
									+ "-" + this.camera;
	}