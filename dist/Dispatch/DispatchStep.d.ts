import { ILatLng } from "../API/Geography/Interfaces";
import { LatLng } from "../API/Geography/LatLng";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { TimeSpan } from "../API/TimeSpan";
import { datetime, nothing, timespan, ulong, JsonObject } from "../API/Types";
import { Place } from "../Places/Place";
import { DispatchStepState } from "./DispatchStepState";
import { DispatchStepStatus } from "./DispatchStepStatus";
/**
 * A portion of work for a {@link DispatchJob}.
 */
export declare class DispatchStep implements IIdUlong, INamed, ISerializable {
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): DispatchStep;
    /**
     * Identifier for this {@link DispatchStep}.
     * This value is unique per {@link DispatchJob}, but is not unique system-wide.
     */
    id: ulong;
    /**
     * A name for the work needed to be performed.
     */
    name: string;
    /**
     * The most recently updated state for this step.
     */
    get status(): DispatchStepStatus;
    /**
     *
     */
    get updated(): Date;
    /**
     * The progress of this step.
     */
    states: Map<DispatchStepStatus, DispatchStepState>;
    /**
     * The optional estimated time of arrival for the asset.
     */
    eta: Date;
    /**
     * The optional expected duration of the work for this step.
     */
    duration: TimeSpan;
    /**
     * The total number of seconds in the {@link duration}.
     */
    get timeOnSite(): number;
    set timeOnSite(value: number);
    /**
     * An optional place which can be used as a template instead of providing lat/long coordinates and a street address.
     * {@link Place.id}
     */
    placeId: ulong;
    /**
     * An optional place which can be used as a template instead of providing lat/long coordinates and a street address.
     * {@link Place.id}
     */
    get place(): Place;
    set place(value: Place);
    /**
     * The street address of where the step must be completed.
     */
    address: string;
    /**
     * The lat/long coordinates of where the step must be {@link DispatchStepStatus.completed}.
     */
    latlng: LatLng | null;
    /**
     * Notes about the status of the work filled in by field-employee.
     */
    notes: string;
    /**
     * Indicates whether this step requires a signature.
     */
    signature: boolean;
    /**
     * The name of the person who signed the step's completion.
     */
    signatory: string;
    constructor(id?: ulong | nothing, name?: string | nothing, states?: Map<DispatchStepStatus, DispatchStepState> | nothing, eta?: Date | number | datetime | nothing, duration?: TimeSpan | timespan | number | nothing, place?: ulong | nothing, address?: string | nothing, latlng?: ILatLng | JsonObject | nothing, notes?: string | nothing, signature?: boolean | nothing, signatory?: string | nothing);
    toJSON(): {
        id: number | null;
        address: string;
        duration: string;
        eta: string;
        latlng: (ILatLng & JsonObject) | null;
        name: string;
        notes: string;
        place: number | null;
        signature: boolean;
        signatory: string;
        states: JsonObject;
    };
}
//# sourceMappingURL=DispatchStep.d.ts.map