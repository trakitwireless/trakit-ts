import { IBelongAsset } from "../API/Interfaces/IBelongAsset";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { datetime, double, JsonObject, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { MaintenanceJob } from "./MaintenanceJob";
import { MaintenanceSchedule } from "./MaintenanceSchedule";
/**
 * The detail for calculating Maintenance Schedule recurrence.
 */
export declare class MaintenanceInterval implements IBelongAsset, ISerializable {
    static fromJSON(json: JsonObject): MaintenanceInterval;
    /**
     * The Vehicle or Trailer to which this recurrence detail belongs.
     * {@link Asset.id}
     */
    assetId: ulong;
    /**
     * The Vehicle or Trailer to which this recurrence detail belongs.
     */
    get asset(): Asset;
    /**
     * The date of the last calculation.
     */
    date: Date;
    /**
     * The odometer at the time of the last calculation.
     */
    odometer: double;
    /**
     * The operating time at the time of the last calculation.
     */
    engineHours: double;
    /**
     * The last "completed" job related to this schedule interval.
     */
    lastJobId: ulong;
    /**
     * The last "completed" job related to this schedule interval.
     */
    get lastJob(): MaintenanceJob;
    constructor(asset?: ulong, date?: Date | number | datetime, odometer?: double, engineHours?: double, lastJob?: ulong);
    toJSON(): {
        asset: number | null;
        date: string | null;
        odometer: number;
        engineHours: number;
        lastJob: number | null;
    };
    /**
     * Tries to predict the next lapse for this interval.
     * @param schedule
     * @returns
     */
    predict(schedule: MaintenanceSchedule): Date;
    /**
     * Tries to predict the next lapse for this interval based on the date.
     * @param days
     * @returns
     */
    predictByDate(days: number): Date;
    /**
     * Tries to predict the next lapse for this interval by averaging the odometer.
     * @param distance
     * @returns
     */
    predictByOdometer(distance: number): Date;
    /**
     * Tries to predict the next lapse for this interval by averaging the engine hours.
     * @param engineHours
     * @returns
     */
    predictByEngineHours(engineHours: number): Date;
}
//# sourceMappingURL=MaintenanceInterval.d.ts.map