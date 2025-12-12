import { DATE, JSON_DATE, JSON_NUMBER } from "../API/Functions";
import { datetime, JsonObject } from "../API/Types";
import { DashcamBase } from "./DashcamBase";
import { DashcamMediaType } from "./DashcamMediaType";

/**
 * A live snapshot a dashcam-enabled provider or asset.
 */
export class DashcamLive extends DashcamBase {
	/**
	 * The type of data being stored.
	 */
	readonly kind = DashcamMediaType.image;
	/**
	 * Timestamp of this live camera image.
	 */
	dts!: Date;

	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const changed = super.fromJSON(json, force) || !!json;
		if (json) {
			this.dts = DATE(json["dts"] as datetime);
		}
		return changed;
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