import { ISerializable } from "../API/Interfaces/ISerializable";
import { TimeSpan } from "../API/TimeSpan";
import { double, timespan, uint, ulong, JsonObject } from "../API/Types";
import { Asset } from "../Assets/Asset";
/**
 * Totalled information from all the results of the report.
 */
export declare class ReportTotal implements ISerializable {
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): ReportTotal;
    /**
     * The asset to which this report total belongs.
     * {@link Asset.id}
     */
    assetId: ulong;
    /**
     * The {@link Asset} to which this report total belongs.
     */
    get asset(): Asset;
    /**
     * Unique code given to the report total.
     */
    stateDetail: string;
    /**
     * The number of summary instances included in this total.
     */
    summaryCount: uint;
    /**
     * The total duration of all summary instances.
     */
    duration: TimeSpan;
    /**
     * The total distance travelled in kilometres of all summary instances.
     */
    distance: double;
    constructor(asset?: ulong, stateDetail?: string, summaryCount?: uint, duration?: TimeSpan | timespan | number, distance?: double);
    toJSON(): {
        asset: number | null;
        stateDetail: string;
        summaryCount: number | null;
        duration: string;
        distance: number | null;
    };
}
//# sourceMappingURL=ReportTotal.d.ts.map