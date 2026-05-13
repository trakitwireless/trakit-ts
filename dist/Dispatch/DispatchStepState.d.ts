import { ILatLng } from "../API/Geography/Interfaces";
import { LatLng } from "../API/Geography/LatLng";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { datetime, JsonObject, nothing } from "../API/Types";
/**
 * Details about the lifetime of a {@link DispatchStep}.
 */
export declare class DispatchStepState implements ISerializable {
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): DispatchStepState;
    /**
     * A timestamp from when the lifetime was updated.
     */
    updated: Date;
    /**
     * The coordinates from the {@link Asset} when the update happened.
     */
    latlng: LatLng | null;
    constructor(updated?: Date | number | datetime | nothing, latlng?: ILatLng | JsonObject | nothing);
    toJSON(): {
        updated: string | null;
        latlng: (ILatLng & JsonObject) | null;
    };
}
//# sourceMappingURL=DispatchStepState.d.ts.map