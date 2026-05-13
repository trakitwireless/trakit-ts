import { int, uint } from "../../API/Types";
import { PlaceType } from "../../Places/PlaceType";
import { ProviderGeofenceBase } from "./ProviderGeofenceBase";
/**
 * A geofence whose boundary is a "rectangle" defined by corner coordinates.
 * @deprecated
 */
export declare class ProviderGeofenceRectangle extends ProviderGeofenceBase {
    /**
     * Boundaries defined with only two coordinates.
     */
    get type(): PlaceType;
    /**
     * The smallest possible diameter for this geofence.
     */
    maxLength: uint;
    /**
     * The smallest possible diameter for this geofence.
     */
    maxWidth: uint;
    constructor(maxGeofenceCount?: uint, maxLength?: int, maxWidth?: int);
    toJSON(): {
        maxLength: number | null;
        maxWidth: number | null;
        type: PlaceType;
        maxGeofenceCount: number;
    };
}
//# sourceMappingURL=ProviderGeofenceRectangle.d.ts.map