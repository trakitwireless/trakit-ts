import { ISerializable } from '../API/Interfaces/ISerializable';
import { SearchPattern } from '../API/SearchPattern';
import { JsonObject, nothing } from '../API/Types';
import { ReportFilterMode } from './ReportFilterMode';
import { ReportParameter } from './ReportParameter';
import { ReportScorecardRules } from './ReportScorecardRules';
/**
 * The options used by the report runner to process results.
 */
export declare class ReportOptions implements ISerializable {
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): ReportOptions;
    /**
     * A list of parameters to better shape the results.
     */
    parameters: ReportParameter[];
    /**
     * A targeting expression for including/excluding Assets.
     */
    targets: SearchPattern[] | null;
    /**
     * The mechanism to use for filtering based on places and regions.
     */
    filtering: ReportFilterMode;
    /**
     * A targeting expression for limiting results which only include data from Assets interacting with the targeted Places.
     */
    places: SearchPattern[] | null;
    /**
     * A list of provinces and states, where only assets within those regions will be included in the results.
     */
    regions: string[];
    /**
     * Rules used to generate scorecard for this report.
     */
    scorecardRules: ReportScorecardRules | null;
    constructor(parameters?: ReportParameter[] | nothing, targets?: SearchPattern[] | nothing, filtering?: ReportFilterMode | nothing, places?: SearchPattern[] | nothing, regions?: string[] | nothing, scorecardRules?: ReportScorecardRules | nothing);
    toJSON(): {
        parameters: any[];
        targets: string | null;
        filtering: ReportFilterMode;
        places: string | null;
        regions: string[];
        scorecardRules: {
            baseScore: number | null;
            parameters: any[];
        } | null;
    };
}
//# sourceMappingURL=ReportOptions.d.ts.map