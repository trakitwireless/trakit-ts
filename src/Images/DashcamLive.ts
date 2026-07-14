import { DATE, JSON_NUMBER } from "../API/Functions";
import { datetime, JsonObject, nothing } from "../API/Types";
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
	dts: Date = DATE();

	constructor(json?: JsonObject | nothing) {
		super();
		if (json) this.fromJSON(json);
	}
	override toJSON() {
		return {
			...super.toJSON(),
			"kind": DashcamMediaType.image,
			"dts": this.dts.toJSON(),
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const changed = super.fromJSON(json, force) || !!json;
		if (json) {
			this.dts = DATE(json["dts"] as datetime);
		}
		return changed;
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