import { FLOAT } from "../API/Constants";
import { DATE, ID, JSON_DATE, JSON_NUMBER } from "../API/Functions";
import { Size } from "../API/Geometry/Size";
import { MERGE } from "../API/Objects";
import { TimeSpan } from "../API/TimeSpan";
import { byte, datetime, double, guid, single, ulong } from "../API/Types";
import { DashcamBase } from "./DashcamBase";
import { DashcamMediaType } from "./DashcamMediaType";

/**
 * An image or video received from a dashcam-enabled provider or asset.
 */
export class Dashcam
	extends DashcamBase {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: any) {
		return new Dashcam(
			ID(json["bytes"]),
			Size.fromJSON(json["size"]),
			json["provider"] || "",
			ID(json["company"]),
			ID(json["asset"]),
			ID(json["camera"]),
			FLOAT(json["latitude"]),
			FLOAT(json["longitude"]),
			FLOAT(json["speed"]),
			FLOAT(json["heading"]),
			FLOAT(json["altitude"]),
			json["guid"] || "",
			DashcamMediaType[json["kind"] as DashcamMediaType],
			FLOAT(json["fps"]),
			DATE(json["start"]),
			DATE(json["end"]),
			json["eventName"] || "",
		);
	}
	
	/**
	 * Unique identifier of this resource.
	 */
	guid: guid;
	/**
	 * The type of data being stored.
	 */
	kind: DashcamMediaType;
	/**
	 * For {@link DashcamMediaType.video} media files, this indicates the frames-per-second.
	 */
	fps: single;
	/**
	 * Timestamp of when this resource started.
	 * For {@link DashcamMediaType.image} media files, the start and end are the same.
	 */
	start: Date;
	/**
	 * Timestamp of when this resource ended.
	 * For {@link DashcamMediaType.image} media files, the start and end are the same.
	 */
	end: Date;
	/**
	 * For {@link DashcamMediaType.video} media files, the duration of the video clip.
	 */
	get duration(): TimeSpan { return new TimeSpan((this.end as any) - (this.start as any)); }
	/**
	 * The reason why we're saving this image/video. Or the event name that triggered it.
	 */
	eventName: string;

	constructor(
		bytes?: ulong,
		size?: Size,
		provider?: string,
		company?: ulong,
		asset?: ulong,
		camera?: byte,
		latitude?: double,
		longitude?: double,
		speed?: double,
		heading?: double,
		altitude?: double,
		guid?: guid,
		kind?: DashcamMediaType,
		fps?: single,
		start?: Date | number | datetime,
		end?: Date | number | datetime,
		eventName?: string
	) {
		super(
			bytes,
			size,
			provider,
			company,
			asset,
			camera,
			latitude,
			longitude,
			speed,
			heading,
			altitude
		);
		this.guid = guid || "";
		this.kind = DashcamMediaType[kind as DashcamMediaType] || DashcamMediaType.unknown;
		this.fps = FLOAT(fps as any);
		this.start = DATE(start);
		this.end = DATE(end);
		this.eventName = eventName || "";
	}

	override toJSON() {
		return MERGE(
			super.toJSON(),
			{
				guid: this.guid || "",
				kind: DashcamMediaType[this.kind] || DashcamMediaType.unknown,
				fps: JSON_NUMBER(this.fps),
				start: JSON_DATE(this.start),
				end: JSON_DATE(this.end),
				eventName: this.eventName || "",
			}
		);
	}
	
	// IRequestable
	/**
	 * The {@link guid} is the key.
	 */
	getKey(): string { return this.guid.toString(); }
}