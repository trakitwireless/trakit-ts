import { ISerializable } from "../API/Interfaces/ISerializable";
import { double, JsonObject } from "../API/Types";
import { ReportScorecardParameter } from "./ReportScorecardParameter";
/**
 * Rules used for generating a scorecard.
 */
export declare class ReportScorecardRules implements ISerializable {
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): ReportScorecardRules;
    /**
     * Base score for the scorecard.
     */
    baseScore: double;
    /**
     * Infraction parameters used to generate the final score
     */
    parameters: ReportScorecardParameter[];
    constructor(baseScore?: double, parameters?: ReportScorecardParameter[]);
    toJSON(): {
        baseScore: number | null;
        parameters: any[];
    };
}
//# sourceMappingURL=ReportScorecardRules.d.ts.map