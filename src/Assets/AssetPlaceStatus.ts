import { DATE } from "../API/Functions";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { datetime, JsonObject } from "../API/Types";
import { AssetPlaceStatusType } from "./AssetPlaceStatusType";

/**
 * A simple status for each place an Asset visits.
 */
export class AssetPlaceStatus
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: JsonObject) {
		return new AssetPlaceStatus(
			json["kind"] as AssetPlaceStatusType,
			json["enter"] as datetime,
			json["latest"] as datetime,
		);
	}
	
	/**
	 * The kind of interaction.
	 */
	kind: AssetPlaceStatusType = AssetPlaceStatusType.inside;
	/**
	 * The date/time stamp for when the Asset first began interacting with the Place.
	 */
	enter: Date = DATE();
	/**
	 * The most recent date/time stamp for the interaction.
	 */
	latest: Date = DATE();

	constructor(
		kind?: AssetPlaceStatusType,
		enter?: Date | number | datetime,
		latest?: Date | number | datetime,
	) {
		this.kind = AssetPlaceStatusType[kind as AssetPlaceStatusType] || AssetPlaceStatusType.inside;
		this.enter = DATE(enter);
		this.latest = DATE(latest);
		
	}

	toJSON() {
		return {
			"kind": AssetPlaceStatusType[this.kind] || AssetPlaceStatusType.inside,
			"enter": this.enter.toJSON(),
			"latest": this.latest.toJSON(),
		};
	}
}