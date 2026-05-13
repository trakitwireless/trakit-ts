import { ISerializable } from "../API/Interfaces/ISerializable";
import { TimeSpan } from "../API/TimeSpan";
import { double, timespan, JsonObject } from "../API/Types";
/**
 * Infraction parameter used to generate scorecard
 */
export declare class ReportScorecardParameter implements ISerializable {
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): ReportScorecardParameter;
    /**
     * Type of exception, example speeding, idling, etc.
     */
    condition: string;
    /**
     * Threshold per instance. If the threshold is 0, each instance is used in the calculation
     */
    duration: TimeSpan;
    /**
     * Points applied against the base score per instance
     */
    points: double;
    constructor(condition?: string, duration?: TimeSpan | timespan | number, points?: double);
    toJSON(): {
        condition: string;
        duration: string;
        points: number | null;
    };
}
//# sourceMappingURL=ReportScorecardParameter.d.ts.map