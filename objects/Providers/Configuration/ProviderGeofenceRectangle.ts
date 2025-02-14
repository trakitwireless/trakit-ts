import { ID, JSON_NUMBER } from "../../API/Functions";
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
		maxGeofenceCount?: uint,
		maxLength?: int,
		maxWidth?: int
	) {
		super(maxGeofenceCount);
		this.maxLength = ID(maxLength);
		this.maxWidth = ID(maxWidth);
	}
	
	override toJSON() {
		return MERGE(super.toJSON(), {
			"maxLength": JSON_NUMBER(this.maxLength),
			"maxWidth": JSON_NUMBER(this.maxWidth),
		});
	}
}