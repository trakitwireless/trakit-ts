

	/**
	 * An image or video received from a dashcam-enabled provider or asset.
	 */
	export class Dashcam extends DashcamBase {
		/**
		 * Unique identifier of this resource.
		 */
		guid: Guid;
		/**
		 * The type of data being stored.
		 */
		kind: DashcamMediaType;
		/**
		 * For <see cref="DashcamMediaType.video"/> media files, this indicates the frames-per-second.
		 */
		fps: float = NaN;
		/**
		 * Timestamp of when this resource started.
		 * For <see cref="DashcamMediaType.image"/> media files, the start and end are the same.
		 */
		start: Date = DATE();
		/**
		 * Timestamp of when this resource ended.
		 * For <see cref="DashcamMediaType.image"/> media files, the start and end are the same.
		 */
		end: Date = DATE();
		/**
		 * For <see cref="DashcamMediaType.video"/> media files, the duration of the video clip.
		 */
		get duration(): TimeSpan { return this.end - this.start; }
		/**
		 * The reason why we're saving this image/video. Or the event name that triggered it.
		 */
		eventName: string = "";

		// IRequestable
		/**
		 * The <see cref="guid"/> is the key.
		 */
public getKey(): string { return this.guid.toString(); }
	}