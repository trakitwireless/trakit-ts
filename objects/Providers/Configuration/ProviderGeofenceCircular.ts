import { FLOAT } from "../../API/Constants";
import { IS_AN } from "../../API/Functions";
import { MERGE } from "../../API/Objects";
import { uint } from "../../API/Types";
import { PlaceType } from "../../Places/PlaceType";
import { ProviderGeofenceBase } from "./ProviderGeofenceBase";



/**
 * A geofence defined by a centre coordinate and a threshold value to indicate the boundary around that point.
 *  <override skip="false" name="" />
 * @deprecated
 */
export class ProviderGeofenceCircular
	extends ProviderGeofenceBase {
	/**
	 * Distance from a central point.
	 */
	get type(): PlaceType { return PlaceType.radial; }
	/**
	 * The smallest possible radius for this geofence.
	 */
	minRadius: uint = NaN;
	/**
	 * The largest possible radius for this geofence.
	 */
	maxRadius: uint = NaN;
	
	constructor(
		maxGeofenceCount: uint,
		minRadius: uint,
		maxRadius: uint
	) {
		super(maxGeofenceCount);
		this.minRadius = FLOAT(minRadius as any);
		this.maxRadius = FLOAT(maxRadius as any);
	}

	override toJSON() {
		return MERGE(super.toJSON(), {
			"minRadius": IS_AN(this.minRadius) ? this.minRadius : null,
			"maxRadius": IS_AN(this.maxRadius) ? this.maxRadius : null,
		});
	}
}