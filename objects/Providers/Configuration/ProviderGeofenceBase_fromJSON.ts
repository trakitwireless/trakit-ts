import { int, JsonObject, uint } from "../../API/Types";
import { PlaceType } from "../../Places/PlaceType";
import { ProviderGeofenceBase } from "./ProviderGeofenceBase";
import { ProviderGeofenceCircular } from "./ProviderGeofenceCircular";
import { ProviderGeofencePoint } from "./ProviderGeofencePoint";
import { ProviderGeofencePolygon } from "./ProviderGeofencePolygon";
import { ProviderGeofenceRectangle } from "./ProviderGeofenceRectangle";

/**
 * Instantiates a geofence based on the type property in the given JSON.
 * @param json 
 * @returns 
 */
ProviderGeofenceBase.fromJSON = function (json: JsonObject) {
	switch (PlaceType[json["type"] as PlaceType]) {
		case PlaceType.point:
			return new ProviderGeofencePoint(
				json["maxGeofenceCount"] as uint,
			);
		case PlaceType.radial:
			return new ProviderGeofenceCircular(
				json["maxGeofenceCount"] as uint,
				json["minRadius"] as uint,
				json["maxRadius"] as uint,
			);
		case PlaceType.rectangle:
			return new ProviderGeofenceRectangle(
				json["maxGeofenceCount"] as uint,
				json["maxLength"] as uint,
				json["maxWidth"] as int,
			);
		case PlaceType.polygon:
			return new ProviderGeofencePolygon(
				json["maxGeofenceCount"] as uint,
				json["maxVertices"] as uint,
			);
		default:
			throw new Error("Unsopported type:" + json["type"]);
	}
};