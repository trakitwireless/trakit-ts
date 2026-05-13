import { BaseComponent } from "../API/BaseComponent";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { IVisual } from "../API/Interfaces/IVisual";
import { SearchPattern } from "../API/SearchPattern";
import { TimeSpan } from "../API/TimeSpan";
import { codified, colour, double, email, JsonObject, nothing, uint, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { Company } from "../Companies/Company";
import { MaintenanceInterval } from "./MaintenanceInterval";
/**
 * Recurring service work
 */
export declare class MaintenanceSchedule extends BaseComponent implements IIdUlong, INamed, IBelongCompany, IVisual {
    /**
     * Unique identifier
     */
    id: ulong;
    /**
     * The company to which this schedule belongs
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this schedule belongs
     */
    get company(): Company;
    /**
     * The name of the work to be done.  Like "oil change".
     */
    name: string;
    /**
     * Notes about the work to be done.  Like "change the oil and oil filter".
     */
    notes: string;
    /**
     * The targeting expression to select which Vehicles and Trailers require this maintenance work.
     */
    targets: SearchPattern[] | null;
    /**
     * List of Users to send notifications.
     */
    notify: email[];
    /**
     * The fill/background colour of the icon.
     */
    fill: colour;
    /**
     * Outline and graphic colour.
     */
    stroke: colour;
    /**
     * The name of the symbol for this schedule.
     */
    graphic: codified;
    /**
     * The number of days in advance to predict a job will become pending.
     */
    predictionDays: uint;
    /**
     * The number of days between service visits.
     */
    recurDays: uint;
    /**
     * The amount of mileage between service visits.
     */
    recurDistance: double;
    /**
     * The number of operating hours between service visits.
     */
    recurEngineHours: double;
    /**
     * The per-asset details calculated by the system to help predict the creation of Maintenance Jobs.
     */
    intervals: Map<ulong, MaintenanceInterval>;
    /**
     * The name of the garage or service facility where the work is done.
     */
    garage: string;
    /**
     * The estimated time for the job.
     */
    duration: TimeSpan;
    /**
     * The estimated cost for the job cost in dollars.
     */
    cost: double;
    /**
     * A reference code used to track this job.
     */
    reference: string;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        id: number | null;
        v: number[];
        company: number | null;
        name: string;
        notes: string;
        notify: string[];
        targets: string | null;
        fill: string;
        stroke: string;
        graphic: string;
        garage: string;
        cost: number;
        duration: string;
        reference: string;
        predictionDays: number;
        recurDays: number | null;
        recurDistance: number | null;
        recurEngineHours: number | null;
        intervals: JsonObject;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
    /**
     * Tries to predict the next lapse for the given asset based on the date, odometer, and engine hours of the last completed job.
     * @param asset
     * @returns
     */
    predictAsset(asset: Asset | ulong): Date | null;
    /**
     * Tries to predict the next lapse for this interval based on the date.
     * @param asset
     * @returns
     */
    predictAssetByDate(asset: Asset | ulong): Date | null;
    /**
     * Tries to predict the next lapse for this interval by averaging the odometer.
     * @param asset
     * @returns
     */
    predictAssetByOdometer(asset: Asset | ulong): Date | null;
    /**
     * Tries to predict the next lapse for this interval by averaging the engine hours.
     * @param asset
     * @returns
     */
    predictAssetByEngineHours(asset: Asset | ulong): Date | null;
}
//# sourceMappingURL=MaintenanceSchedule.d.ts.map