import { ILatLng } from "../API/Geography/Interfaces";
import { LatLng } from "../API/Geography/LatLng";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { TimeSpan } from "../API/TimeSpan";
import { double, timespan, ulong, JsonObject } from "../API/Types";
/**
 * Driving directions and details like duration and distance.
 */
export declare class DispatchDirection implements ISerializable {
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): DispatchDirection;
    /**
     * The total distance of these directions (including sub-directions if applicable).
     */
    distance: double;
    /**
     * The total duration of these directions (including sub-directions if applicable).
     */
    duration: TimeSpan;
    /**
     * Text hint for the driver for the action to perform.
     */
    instructions: string;
    /**
     * A <format id="polyline">route path</format> to display on a map.
     */
    path: LatLng[];
    /**
     * For complex routes, the sub-directions provide a breakdown or additional details.
     */
    directions: DispatchDirection[];
    /**
     * Unique identifier of the {@link DispatchJob} or {@link DispatchTask}.
     */
    job: ulong;
    /**
     * The {@link DispatchStep.id}, if this direction is for {@link DispatchJob}s.
     */
    step: ulong;
    constructor(distance?: double, duration?: TimeSpan | timespan | number, instructions?: string, path?: (ILatLng | JsonObject)[], directions?: DispatchDirection[], job?: ulong, step?: ulong);
    toJSON(): {
        distance: number;
        duration: string | null;
        instructions: string;
        path: any[];
        directions: any[];
        job: number | null;
        step: number | null;
    };
}
//# sourceMappingURL=DispatchDirection.d.ts.map