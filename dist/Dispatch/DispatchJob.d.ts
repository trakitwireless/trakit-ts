import { BaseComponent } from "../API/BaseComponent";
import { LatLngBounds } from "../API/Geography/LatLngBounds";
import { IBelongAsset } from "../API/Interfaces/IBelongAsset";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { ILabelled } from "../API/Interfaces/ILabelled";
import { codified, datetime, JsonObject, nothing, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { Company } from "../Companies/Company";
import { Document } from "../Hosting/Document";
import { FormResult } from "../Hosting/FormResult";
import { DispatchJobPriority } from "./DispatchJobPriority";
import { DispatchStep } from "./DispatchStep";
import { DispatchStepStatus } from "./DispatchStepStatus";
/**
 * Some work that needs to be done by performing one or more {@link DispatchStep}s.
 */
export declare class DispatchJob extends BaseComponent implements IIdUlong, ILabelled, IBelongCompany, IBelongAsset {
    /**
     * Unique identifier of this job.
     */
    id: ulong;
    /**
     * The company to which this job belongs.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this job belongs.
     */
    get company(): Company;
    /**
     * The {@link Asset} to which this job belongs.
     * This value is null when unassigned.
     * {@link Asset.id}
     */
    assetId: ulong;
    /**
     * The {@link Asset} to which this job belongs.
     * This value is null when unassigned.
     */
    get asset(): Asset;
    set asset(value: Asset);
    /**
     * A name for the work needed to be performed.
     */
    name: string;
    /**
     * Name/value collections of custom fields used to refer to external systems.
     */
    references: Map<string, string>;
    /**
     * Instructions (filled out by dispatcher) for the field-employee to help them complete the job.
     */
    instructions: string;
    /**
     * A list of hosted {@link FormResult.id} attached to this job.
     */
    formIds: ulong[];
    /**
     * A list of hosted {@link FormResult}s attached to this job.
     */
    get forms(): FormResult[];
    set forms(value: FormResult[]);
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
     * The importance of this job when scheduling for an asset.
     */
    priority: DispatchJobPriority;
    /**
     * Codified label names used to relate (unassigned) jobs to {@link Asset}s.
     */
    labels: codified[];
    /**
     * The codified status tag names reflecting the conditions of this job.
     */
    tags: codified[];
    /**
     * A list of coordinates to visit in order to carry out the work for this job.
     */
    steps: DispatchStep[];
    /**
     * When this job was originally created.
     */
    created: Date;
    /**
     * Clocked-in driver name who made the update.
     * Null if not clocked-in, or no changes have been made.
     */
    driver: string;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        id: number | null;
        company: number | null;
        v: number[];
        driver: string;
        created: string;
        name: string;
        instructions: string;
        priority: DispatchJobPriority;
        references: JsonObject;
        labels: string[];
        tags: string[];
        forms: number[];
        attachments: number[];
        steps: any[];
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
    /**
     * Returns a {@link LatLngBounds} which encloses all the steps.
     * @return
     */
    getBounds(): LatLngBounds;
    /**
     * Returns the first {@link DispatchStep} in the sequence that is not completed, or returns null.
     * @return
     */
    getNextStep(): DispatchStep | null;
    /**
     * Returns the {@link DispatchStep} in the sequence that is currently being worked on, or returns null.
     * This method often returns the same result as {@link DispatchJob#getNextStep} because it will find.
     * @returns
     */
    getActiveStep(): DispatchStep | null;
    /**
     * Returns the most recent {@link DispatchStep} in the sequence that has been updated, or null.
     * @returns
     */
    getLastStep(): DispatchStep | null;
    /**
     * Will return true if all the {@link DispatchStep.status}es match the given status.
     * @param status
     * @returns
     */
    areAllStatuses(status: DispatchStepStatus): boolean;
    /**
     * Will return true if all the {@link DispatchStep}s have a valid {@link DispatchStep.eta}, and it's from "today".
     * @param today
     * @returns
     */
    areAllStepsScheduled(today?: Date | datetime | nothing): boolean;
}
//# sourceMappingURL=DispatchJob.d.ts.map