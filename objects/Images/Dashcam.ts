

	/// <summary>
	/// An image or video received from a dashcam-enabled provider or asset.
	/// </summary>
	export class Dashcam extends DashcamBase {
		/// <summary>
		/// Unique identifier of this resource.
		/// </summary>
		public guid: Guid;
		/// <summary>
		/// The type of data being stored.
		/// </summary>
		public kind: DashcamMediaType;
		/// <summary>
		/// For <see cref="DashcamMediaType.video"/> media files, this indicates the frames-per-second.
		/// </summary>
		public fps: float = NaN;
		/// <summary>
		/// Timestamp of when this resource started.
		/// For <see cref="DashcamMediaType.image"/> media files, the start and end are the same.
		/// </summary>
		public start: Date = DATE();
		/// <summary>
		/// Timestamp of when this resource ended.
		/// For <see cref="DashcamMediaType.image"/> media files, the start and end are the same.
		/// </summary>
		public end: Date = DATE();
		/// <summary>
		/// For <see cref="DashcamMediaType.video"/> media files, the duration of the video clip.
		/// </summary>
		public get duration(): TimeSpan { return this.end - this.start; }
		/// <summary>
		/// The reason why we're saving this image/video. Or the event name that triggered it.
		/// </summary>
		public eventName: string = "";

		// IRequestable
		/// <summary>
		/// The <see cref="guid"/> is the key.
		/// </summary>
		/// <returns></returns>
		public getKey(): string { return this.guid.toString(); }
	}