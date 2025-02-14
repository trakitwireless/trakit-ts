import { ID, IS_AN, JSON_NUMBER } from "../../API/Functions";
import { MERGE } from "../../API/Objects";
import { uint } from "../../API/Types";
import { PlaceType } from "../../Places/PlaceType";
import { ProviderGeofenceBase } from "./ProviderGeofenceBase";

/**
 * A geofence whose boundary is defined by a non-overlapping series of coordinates.
 *  <override skip="false" name="" />
 * @deprecated
 */
export class ProviderGeofencePolygon
	extends ProviderGeofenceBase {
	/**
	 * Complex geofence.
	 */
	get type(): PlaceType { return PlaceType.polygon; }
	/**
	 * The maximum number of vertices supported by the device.
	 */
	maxVertices: uint = NaN;

	constructor(
		maxGeofenceCount?: uint,
		maxVertices?: uint
	) {
		super(maxGeofenceCount);
		this.maxVertices = ID(maxVertices);
	}
	override toJSON() {
		return MERGE(super.toJSON(), {
			"maxVertices": JSON_NUMBER(this.maxVertices),
		});
	}
}