import { uint } from "../../API/Types";
import { PlaceType } from "../../Places/PlaceType";
import { ProviderGeofenceBase } from "./ProviderGeofenceBase";
/**
 * A geofence defined by a centre coordinate and a threshold value to indicate the boundary around that point.
 * @deprecated
 */
export declare class ProviderGeofenceCircular extends ProviderGeofenceBase {
    /**
     * Distance from a central point.
     */
    get type(): PlaceType;
    /**
     * The smallest possible radius for this geofence.
     */
    minRadius: uint;
    /**
     * The largest possible radius for this geofence.
     */
    maxRadius: uint;
    constructor(maxGeofenceCount?: uint, minRadius?: uint, maxRadius?: uint);
    toJSON(): {
        minRadius: number | null;
        maxRadius: number | null;
        type: PlaceType;
        maxGeofenceCount: number;
    };
}
//# sourceMappingURL=ProviderGeofenceCircular.d.ts.map