import { DATE, DATE_JSON } from "../API/Functions";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { AssetPlaceStatusType } from "./AssetPlaceStatusType";

/**
 * A simple status for each place an Asset visits.
 */
export class AssetPlaceStatus
	implements ISerializable {
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

	constructor(json: any)
	constructor(
		kind?: AssetPlaceStatusType | any,
		enter?: Date | number | string,
		latest?: Date | number | string
	) {
		if (this.kind = AssetPlaceStatusType[kind as AssetPlaceStatusType]) {
			this.enter = DATE(enter);
			this.latest = DATE(latest);
		} else if (kind) {
			this.kind = AssetPlaceStatusType[kind["kind"] as AssetPlaceStatusType];
			this.enter = DATE(kind["enter"]);
			this.latest = DATE(kind["latest"]);
		}
	}

	toJSON() {
		return {
			"kind": this.kind,
			"enter": DATE_JSON(this.enter),
			"latest": DATE_JSON(this.latest),
		};
	}
}