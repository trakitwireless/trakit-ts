import { BaseComponent } from "../API/BaseComponent";
import { LatLng } from "../API/Geography/LatLng";
import { IBelongAsset } from "../API/Interfaces/IBelongAsset";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { TimeSpan } from "../API/TimeSpan";
import { JsonObject, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { Company } from "../Companies/Company";
import { Document } from "../Hosting/Document";
import { Place } from "../Places/Place";
import { DispatchTaskStatus } from "./DispatchTaskStatus";
/**
 * A task assigned to an asset which represents a coordinate on the map which must be visited.
 * @deprecated Use DispatchJob instead
 */
export declare class DispatchTask extends BaseComponent implements IIdUlong, IBelongCompany, IBelongAsset {
    /**
     * Unique identifier of this task.
     */
    id: ulong;
    /**
     * The company to which this task belongs.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this task belongs.
     */
    get company(): Company;
    /**
     * The asset to which this task belongs.
     * {@link Asset.id}
     */
    assetId: ulong;
    /**
     * The {@link Asset} to which this task belongs.
     */
    get asset(): Asset;
    set asset(value: Asset);
    /**
     * The name of this task or the work needed to be performed.
     */
    name: string;
    /**
     * Name/value collections of custom fields used to refer to external systems.
     */
    references: Map<string, string>;
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
     * The street address of where the task must be completed.
     */
    address: string;
    /**
     * The lat/long coordinates of where the task must be completed.
     */
    latlng: LatLng;
    /**
     * The progress of this task.
     */
    status: DispatchTaskStatus;
    /**
     * When this task was created.
     */
    created: Date;
    /**
     * The optional estimated time of arrival for the asset.
     */
    eta: Date;
    /**
     * The optional expected duration of the work for this task.
     */
    duration: TimeSpan;
    /**
     * The date/time stamp of when the asset arrived at this task.
     */
    arrived: Date;
    /**
     * The date/time stamp of when this task was completed.
     */
    completed: Date;
    /**
     * Instructions (filled out by dispatcher) for the field-employee to help them completed the task.
     */
    instructions: string;
    /**
     * Indicates whether the task has a signature.
     */
    signature: boolean;
    /**
     * The name of the person who signed the task's completion.
     */
    signatory: string;
    /**
     * Notes about the status of the work filled in by field-employee.
     */
    notes: string;
    /**
     * A list of hosted {@link Document} identifiers attached to this task.
     */
    attachmentIds: ulong[];
    /**
     * A list of hosted {@link Document} identifiers attached to this task.
     */
    get attachments(): Document[];
    set attachments(value: Document[]);
    /**
     * Either the user's login, or provider's identifier that changed this task
     */
    updatedBy: string;
    /**
     * Timestamp from the last change made to this task
     */
    updatedUtc: Date;
    constructor(json?: JsonObject);
    toJSON(): {
        id: number | null;
        company: number | null;
        asset: number | null;
        v: number[];
        name: string;
        references: JsonObject;
        place: number | null;
        address: string;
        latlng: import("..").ILatLng & JsonObject;
        status: DispatchTaskStatus;
        created: string;
        eta: string;
        duration: string;
        arrived: string;
        completed: string;
        instructions: string;
        signature: boolean;
        signatory: string;
        notes: string;
        attachments: number[];
        updatedBy: string;
        updatedUtc: string;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
}
//# sourceMappingURL=DispatchTask.d.ts.map