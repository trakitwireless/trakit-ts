

	/// <summary>
	/// A live snapshot a dashcam-enabled provider or asset.
	/// </summary>
	export class DashcamLive extends DashcamBase {
		/// <summary>
		/// The type of data being stored.
		/// </summary>
		/// <override value="image" />
		public readonly DashcamMediaType kind = DashcamMediaType.image;
		/// <summary>
		/// Timestamp of this live camera image.
		/// </summary>
		public dts: Date = DATE();

		// IRequestable
		/// <summary>
		/// A combination of the asset, provider, and camera number.
		/// </summary>
		/// <returns></returns>
		public override string GetKey() => (this.asset ?? ulong.MinValue)
									+ "-" + this.provider
									+ "-" + this.camera;
	}