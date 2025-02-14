import { DATE, JSON_DATE } from "../API/Functions";
import { ISerializable } from "../API/Interfaces/ISerializable";
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
	static fromJSON(json: any) {
		return new AssetPlaceStatus(
			AssetPlaceStatusType[json["kind"] as AssetPlaceStatusType],
			DATE(json["enter"]),
			DATE(json["latest"])
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
		kind: AssetPlaceStatusType,
		enter: Date | number | string,
		latest: Date | number | string
	) {
		this.kind = AssetPlaceStatusType[kind] || AssetPlaceStatusType.inside;
		this.enter = DATE(enter);
		this.latest = DATE(latest);
		
	}

	toJSON() {
		return {
			"kind": this.kind,
			"enter": JSON_DATE(this.enter),
			"latest": JSON_DATE(this.latest),
		};
	}
}