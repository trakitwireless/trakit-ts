import { IBelongAsset } from "../API/Interfaces/IBelongAsset";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { double, JsonObject, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
/**
 * Scorecard generated from the results of this report.
 */
export declare class ReportScorecard implements ISerializable, IBelongAsset {
    /**
     *
     * @param json
     * @returns
     */
    static fromJSON(json: JsonObject): ReportScorecard;
    /**
     * The asset to which this scorecard belongs.
     * {@link Asset.id}
     */
    assetId: ulong;
    /**
     * The {@link Asset} to which this scorecard belongs.
     */
    get asset(): Asset;
    /**
     * Final score calculated based on scorecard rules.
     */
    score: double;
    /**
     * Points per rule
     */
    rulePoints: Map<string, double>;
    constructor(asset?: ulong, score?: double, rulePoints?: Map<string, double>);
    toJSON(): {
        asset: number | null;
        score: number;
        rulePoints: JsonObject;
    };
}
//# sourceMappingURL=ReportScorecard.d.ts.map