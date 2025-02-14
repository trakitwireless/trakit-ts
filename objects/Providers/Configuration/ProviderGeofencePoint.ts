import { PlaceType } from "../../Places/PlaceType";
import { ProviderGeofenceBase } from "./ProviderGeofenceBase";

/**
 * This is a point and not a geofence, so I don't know why this is defined.
 * @deprecated
 */
export class ProviderGeofencePoint
	extends ProviderGeofenceBase {
	/**
	 * Not a boundary, so the modem must use its own internal threshold.
	 */
	get type(): PlaceType { return PlaceType.point; }
}