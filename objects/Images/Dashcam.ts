import { FLOAT } from "../API/Constants";
import { DATE, JSON_DATE, JSON_NUMBER } from "../API/Functions";
import { TimeSpan } from "../API/TimeSpan";
import { datetime, guid, JsonObject, single } from "../API/Types";
import { DashcamBase } from "./DashcamBase";
import { DashcamMediaType } from "./DashcamMediaType";

/**
 * An image or video received from a dashcam-enabled provider or asset.
 */
export class Dashcam extends DashcamBase {
	/**
	 * Unique identifier of this resource.
	 */
	guid!: guid;
	/**
	 * The type of data being stored.
	 */
	kind!: DashcamMediaType;
	/**
	 * For {@link DashcamMediaType.video} media files, this indicates the frames-per-second.
	 */
	fps!: single;
	/**
	 * Timestamp of when this resource started.
	 * For {@link DashcamMediaType.image} media files, the start and end are the same.
	 */
	start!: Date;
	/**
	 * Timestamp of when this resource ended.
	 * For {@link DashcamMediaType.image} media files, the start and end are the same.
	 */
	end!: Date;
	/**
	 * For {@link DashcamMediaType.video} media files, the duration of the video clip.
	 */
	get duration(): TimeSpan { return new TimeSpan((this.end as any) - (this.start as any)); }
	/**
	 * The reason why we're saving this image/video. Or the event name that triggered it.
	 */
	eventName!: string;

	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const changed = super.fromJSON(json, force) || !!json;
		if (json) {
			this.guid = (json["guid"] as guid) || "";
			this.kind = DashcamMediaType[json["kind"] as DashcamMediaType] || DashcamMediaType.unknown;
			this.fps = FLOAT(json["fps"] as any);
			this.start = DATE(json["start"] as datetime);
			this.end = DATE(json["end"] as datetime);
			this.eventName = (json["eventName"] as string) || "";
		}
		return changed;
	}
	override toJSON() {
		return {
			...super.toJSON(),
			guid: this.guid || "",
			kind: DashcamMediaType[this.kind] || DashcamMediaType.unknown,
			fps: JSON_NUMBER(this.fps),
			start: JSON_DATE(this.start),
			end: JSON_DATE(this.end),
			eventName: this.eventName || "",
		};
	}
	
	// IRequestable
	/**
	 * The {@link guid} is the key.
	 */
	getKey() { return this.guid; }
}