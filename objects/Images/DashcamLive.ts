import { DATE, JSON_DATE, JSON_NUMBER } from "../API/Functions";
import { ISize } from "../API/Geometry/Interfaces";
import { Size } from "../API/Geometry/Size";
import { byte, datetime, double, JsonObject, ulong } from "../API/Types";
import { DashcamBase } from "./DashcamBase";
import { DashcamMediaType } from "./DashcamMediaType";

/**
 * A live snapshot a dashcam-enabled provider or asset.
 */
export class DashcamLive
	extends DashcamBase {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: JsonObject) {
		return new DashcamLive(
			json["bytes"] as ulong,
			json["size"] as ISize | JsonObject,
			json["provider"] as string,
			json["company"] as ulong,
			json["asset"] as ulong,
			json["camera"] as byte,
			json["latitude"] as double,
			json["longitude"] as double,
			json["speed"] as double,
			json["heading"] as double,
			json["altitude"] as double,
			json["dts"] as datetime,
		);
	}
	/**
	 * The type of data being stored.
	 */
	readonly kind = DashcamMediaType.image;
	/**
	 * Timestamp of this live camera image.
	 */
	dts: Date;

	constructor(
		bytes?: ulong,
		size?: Size | ISize | JsonObject,
		provider?: string,
		company?: ulong,
		asset?: ulong,
		camera?: byte,
		latitude?: double,
		longitude?: double,
		speed?: double,
		heading?: double,
		altitude?: double,
		dts?: Date | string | number,
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
		this.dts = DATE(dts);
	}
	
	override toJSON() {
		return {
			...super.toJSON(),
			"kind": DashcamMediaType.image,
			"dts": JSON_DATE(this.dts),
		};
	}

	// IRequestable
	/**
	 * A combination of the asset, provider, and camera number.
	 */
	getKey(): string {
		return (JSON_NUMBER(this.assetId) ?? 0)
			+ "-" + this.providerId
			+ "-" + this.camera;
	}
}