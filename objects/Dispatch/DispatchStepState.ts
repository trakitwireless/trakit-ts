import { DATE, JSON_DATE } from "../API/Functions";
import { ILatLng } from "../API/Geography/Interfaces";
import { LatLng } from "../API/Geography/LatLng";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { datetime } from "../API/Types";

/**
 * Details about the lifetime of a {@link DispatchStep}.
 */
export class DispatchStepState
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: any) {
		return new DispatchStepState(
			json["updated"] as datetime,
			json["latlng"] as ILatLng,
		);
	}
	
	/**
	 * A timestamp from when the lifetime was updated.
	 */
	updated: Date = DATE();
	/**
	 * The coordinates from the {@link Asset} when the update happened.
	 */
	latlng: LatLng | null;
	
	constructor(
		updated?: Date | number | datetime,
		latlng?: ILatLng | null,
	) {
		this.updated = DATE(updated);
		this.latlng = latlng
			? LatLng.fromJSON(latlng)
			: null;
	}

	toJSON() {
		return {
			"updated": JSON_DATE(this.updated),
			"latlng": this.latlng?.toJSON() ?? null,
		};
	}
}