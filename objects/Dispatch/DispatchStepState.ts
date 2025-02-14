import { DATE, JSON_DATE } from "../API/Functions";
import { LatLng } from "../API/Geography/LatLng";
import { ISerializable } from "../API/Interfaces/ISerializable";

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
			DATE(json["updated"]),
			json["latlng"] || null
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
		updated: Date | number | string,
		latlng: LatLng | null
	) {
		this.updated = DATE(updated);
		this.latlng = LatLng.fromJSON(latlng);
	}

	toJSON() {
		return {
			"updated": JSON_DATE(this.updated),
			"latlng": this.latlng?.toJSON() ?? null,
		};
	}
}