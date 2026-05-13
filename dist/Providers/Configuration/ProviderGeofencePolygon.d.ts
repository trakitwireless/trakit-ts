import { uint } from "../../API/Types";
import { PlaceType } from "../../Places/PlaceType";
import { ProviderGeofenceBase } from "./ProviderGeofenceBase";
/**
 * A geofence whose boundary is defined by a non-overlapping series of coordinates.
 * @deprecated
 */
export declare class ProviderGeofencePolygon extends ProviderGeofenceBase {
    /**
     * Complex geofence.
     */
    get type(): PlaceType;
    /**
     * The maximum number of vertices supported by the device.
     */
    maxVertices: uint;
    constructor(maxGeofenceCount?: uint, maxVertices?: uint);
    toJSON(): {
        maxVertices: number | null;
        type: PlaceType;
        maxGeofenceCount: number;
    };
}
//# sourceMappingURL=ProviderGeofencePolygon.d.ts.map