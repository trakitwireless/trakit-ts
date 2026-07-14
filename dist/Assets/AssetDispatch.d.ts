import { BaseComponent } from "../API/BaseComponent";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { JsonObject, nothing, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { DispatchDirection } from "../Dispatch/DispatchDirection";
import { DispatchJob } from "../Dispatch/DispatchJob";
/**
 * The current state of an asset's {@link DispatchJob} route progress.
 */
export declare class AssetDispatch extends BaseComponent implements IIdUlong, IBelongCompany {
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): AssetDispatch;
    /**
     * Unique identifier of this asset.
     * {@link Asset.id}
     */
    id: ulong;
    /**
     * The company to which this asset belongs.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this asset belongs.
     */
    get company(): Company;
    /**
     * The current list of {@link DispatchJob}s assigned to the asset.
     * {@link DispatchJob}
     */
    jobIds: ulong[];
    /**
     * A list of {@link Asset}s related to this one; like a {@link Person} for a {@link Vehicle} (driver).
     */
    get jobs(): DispatchJob[];
    set jobs(value: DispatchJob[]);
    /**
     * Driving directions and route path details.
     */
    directions: DispatchDirection[];
    /**
     * Timestamp from the last update to this {@link AssetDispatch} by a {@link User}, {@link Machine}, {@link Asset}, or an assigned {@link DispatchJob}.
     */
    lastDispatched: Date;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        id: number | null;
        v: number[];
        companyId: number | null;
        jobs: number[];
        directions: {
            distance: number;
            duration: string | null;
            instructions: string;
            path: any[];
            directions: any[];
            job: number | null;
            step: number | null;
        }[];
        lastDispatched: string;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
}
//# sourceMappingURL=AssetDispatch.d.ts.map