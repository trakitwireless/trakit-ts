import { ID, IS_AN } from "../../API/Functions";
import { MERGE } from "../../API/Objects";
import { int, uint } from "../../API/Types";
import { PlaceType } from "../../Places/PlaceType";
import { ProviderGeofenceBase } from "./ProviderGeofenceBase";

/**
 * A geofence whose boundary is a "rectangle" defined by corner coordinates.
 * @deprecated
 */
export class ProviderGeofenceRectangle
	extends ProviderGeofenceBase {
	/**
	 * Boundaries defined with only two coordinates.
	 */
	get type(): PlaceType { return PlaceType.rectangle; }
	
	/**
	 * The smallest possible diameter for this geofence.
	 */
	maxLength: uint = NaN;
	/**
	 * The smallest possible diameter for this geofence.
	 */
	maxWidth: uint = NaN;

	constructor(
		maxGeofenceCount: uint,
		maxLength: int,
		maxWidth: int
	) {
		super(maxGeofenceCount);
		this.maxLength = ID(maxLength);
		this.maxWidth = ID(maxWidth);
	}
	
	override toJSON() {
		return MERGE(super.toJSON(), {
			"maxLength": IS_AN(this.maxLength) ? this.maxLength : null,
			"maxWidth": IS_AN(this.maxWidth) ? this.maxWidth : null,
		});
	}
}