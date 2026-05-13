import { BaseComponent } from "../API/BaseComponent";
import { IBelongAsset } from "../API/Interfaces/IBelongAsset";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { IPictured } from "../API/Interfaces/IPictured";
import { TimeSpan } from "../API/TimeSpan";
import { double, JsonObject, nothing, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { Company } from "../Companies/Company";
import { Picture } from "../Images/Picture";
import { MaintenanceJobStatus } from "./MaintenanceJobStatus";
import { MaintenanceSchedule } from "./MaintenanceSchedule";
/**
 * Historical service work performed on a Vehicle or Trailer
 */
export declare class MaintenanceJob extends BaseComponent implements IIdUlong, INamed, IBelongCompany, IBelongAsset, IPictured {
    /**
     * Unique identifier
     */
    id: ulong;
    /**
     * The Vehicle or Trailer to which this job belongs
     * {@link Asset.id}
     */
    assetId: ulong;
    /**
     * The Vehicle or Trailer to which this job belongs
     */
    get asset(): Asset;
    /**
     * The company to which this Vehicle or Trailer belongs
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this Vehicle or Trailer belongs
     */
    get company(): Company;
    /**
     * The Maintenance Schedule from which this job was created
     * {@link MaintenanceSchedule.id}
     */
    scheduleId: ulong;
    /**
     * The Maintenance Schedule from which this job was created
     * {@link MaintenanceSchedule.id}
     */
    get schedule(): MaintenanceSchedule;
    set schedule(value: MaintenanceSchedule);
    /**
     * The work being done. Like "oil change".
     */
    name: string;
    /**
     * Notes about the job.  Like "changed the oil and filter".
     */
    notes: string;
    /**
     * The status of this job.
     */
    status: MaintenanceJobStatus;
    /**
     * When was this job created.
     */
    created: Date;
    /**
     * When was this job created.
     */
    completed: Date;
    /**
     * The odometer at the time of the service.
     */
    odometer: double;
    /**
     * The operating time at the time of the service.
     */
    engineHours: double;
    /**
     * The name of the garage or service facility where the work is done.
     */
    garage: string;
    /**
     * Time it took to complete the job.
     */
    duration: TimeSpan;
    /**
     * How much the job cost in dollars.
     */
    cost: double;
    /**
     * A reference code used to track this job
     */
    reference: string;
    /**
     * The mechanic who performed the work.
     */
    technician: string;
    /**
     * Images taken while performing the work for reference.
     * {@link Picture.id}
     */
    pictureIds: ulong[];
    /**
     * {@link Picture}s taken while performing the work for reference.
     */
    get pictures(): Picture[];
    set pictures(values: Picture[]);
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        id: number | null;
        v: number[];
        company: number | null;
        asset: number;
        schedule: number;
        name: string;
        notes: string;
        status: MaintenanceJobStatus;
        created: string | null;
        completed: string | null;
        odometer: number;
        engineHours: number;
        garage: string;
        cost: number;
        duration: string;
        reference: string;
        technician: string;
        pictures: number[];
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
}
//# sourceMappingURL=MaintenanceJob.d.ts.map