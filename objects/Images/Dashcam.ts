

	/**
	 * An image or video received from a dashcam-enabled provider or asset.
	 */
	export class Dashcam extends DashcamBase {
		/**
		 * Unique identifier of this resource.
		 */
		public guid: Guid;
		/**
		 * The type of data being stored.
		 */
		public kind: DashcamMediaType;
		/**
		 * For <see cref="DashcamMediaType.video"/> media files, this indicates the frames-per-second.
		 */
		public fps: float = NaN;
		/**
		 * Timestamp of when this resource started.
		 * For <see cref="DashcamMediaType.image"/> media files, the start and end are the same.
		 */
		public start: Date = DATE();
		/**
		 * Timestamp of when this resource ended.
		 * For <see cref="DashcamMediaType.image"/> media files, the start and end are the same.
		 */
		public end: Date = DATE();
		/**
		 * For <see cref="DashcamMediaType.video"/> media files, the duration of the video clip.
		 */
		public get duration(): TimeSpan { return this.end - this.start; }
		/**
		 * The reason why we're saving this image/video. Or the event name that triggered it.
		 */
		public eventName: string = "";

		// IRequestable
		/**
		 * The <see cref="guid"/> is the key.
		 */
public getKey(): string { return this.guid.toString(); }
	}