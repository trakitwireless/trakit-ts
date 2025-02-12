import { DATE } from "../API/Functions";
import { LatLng } from "../API/Geography/LatLng";
import { ISerializable } from "../API/Interfaces/ISerializable";

/**
 * Details about the lifetime of a {@link DispatchStep}.
 */
export class DispatchStepState
	implements ISerializable {
	/**
	 * A timestamp from when the lifetime was updated.
	 */
	updated: Date = DATE();
	/**
	 * The coordinates from the {@link Asset} when the update happened.
	 */
	latlng: LatLng | null;
	
	constructor(json: any) {
		this.updated = DATE(json("updated"));
		this.latlng = LatLng.fromJSON(json("latlng"));
	}

	toJSON() {
		return {
			"updated": this.updated.toISOString(),
			"latlng": this.latlng?.toJSON() ?? null,
		};
	}
}