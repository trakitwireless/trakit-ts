import { ID } from "../../API/Functions";
import { ISerializable } from "../../API/Interfaces/ISerializable";
import { uint } from "../../API/Types";
import { PlaceType } from "../../Places/PlaceType";
import { ProviderGeofenceCircular } from "./ProviderGeofenceCircular";
import { ProviderGeofencePoint } from "./ProviderGeofencePoint";
import { ProviderGeofencePolygon } from "./ProviderGeofencePolygon";
import { ProviderGeofenceRectangle } from "./ProviderGeofenceRectangle";

/**
 * An abstract class used as a base for all Geofence type classes.
 * @deprecated
 */
export abstract class ProviderGeofenceBase
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: any) {
		switch (PlaceType[json["type"]]) {
			case PlaceType.point:
				return new ProviderGeofencePoint(
					json["maxGeofenceCount"]
				);
			case PlaceType.radial:
				return new ProviderGeofenceCircular(
					json["maxGeofenceCount"],
					json["minRadius"],
					json["maxRadius"]
				);
			case PlaceType.rectangle:
				return new ProviderGeofenceRectangle(
					json["maxGeofenceCount"],
					json["maxLength"],
					json["maxWidth"]
				);
			case PlaceType.polygon:
				return new ProviderGeofencePolygon(
					json["maxGeofenceCount"],
					json["maxVertices"]
				);
			default:
				throw new Error("Unsopported type:" + json["type"]);
		}
	}

	/**
	 * The supported shape of geofence.
	 */
	abstract get type(): PlaceType;
	/**
	 * The maximum number of unique geofences supported by the device.
	 */
	maxGeofenceCount: uint;
	
	constructor(
		maxGeofenceCount: uint
	) {
		this.maxGeofenceCount = ID(maxGeofenceCount) || 0;
	}

	toJSON(): any {
		return {
			"type": PlaceType[this.type] || null,
			"maxGeofenceCount": this.maxGeofenceCount || 0
		};
	}
}