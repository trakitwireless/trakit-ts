import { ID } from "../../API/Functions";
import { ISerializable } from "../../API/Interfaces/ISerializable";
import { JsonObject, uint } from "../../API/Types";
import { PlaceType } from "../../Places/PlaceType";

/**
 * An abstract class used as a base for all Geofence type classes.
 * @deprecated
 */
export abstract class ProviderGeofenceBase
	implements ISerializable {
	/**
	 * Instantiates a geofence based on the `kind` property in the given JSON.
	 * Implementation is in {@link ProviderGeofenceBase_fromJSON.ts}
	 * @param json	The JSON to parse.
	 * @returns		An instance of a {@link ProviderGeofenceBase} subclass.
	 */
	static fromJSON: (json: JsonObject) => ProviderGeofenceBase;

	/**
	 * The supported shape of geofence.
	 */
	abstract get type(): PlaceType;
	/**
	 * The maximum number of unique geofences supported by the device.
	 */
	maxGeofenceCount: uint;
	
	constructor(
		maxGeofenceCount?: uint,
	) {
		this.maxGeofenceCount = ID(maxGeofenceCount) || 0;
	}

	toJSON() {
		return {
			"type": PlaceType[this.type] || null,
			"maxGeofenceCount": this.maxGeofenceCount || 0
		};
	}
}