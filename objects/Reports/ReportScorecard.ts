import { FLOAT } from "../API/Constants";
import { ID, MAP_TO_OBJECT, OBJECT_TO_MAP, OBJECT_TO_MAP_BY_PREDICATE } from "../API/Functions";
import { IBelongAsset } from "../API/Interfaces/IBelongAsset";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { double, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { ASSETS } from "../Storage";

/**
 * Scorecard generated from the results of this report.
 */
export class ReportScorecard
	implements ISerializable, IBelongAsset {
	/**
	 * 
	 * @param json 
	 * @returns 
	 */
	static fromJSON(json: any) {
		return new ReportScorecard(
			ID(json["asset"]),
			FLOAT(json["score"]),
			OBJECT_TO_MAP_BY_PREDICATE(json["rulePoints"], (k, v) => [k, FLOAT(v)])
		);
	}

	/**
	 * The asset to which this scorecard belongs.
	 * {@link Asset.id}
	 */
	assetId: ulong;
	/**
	 * The asset to which this scorecard belongs.
	 * {@link Asset.id}
	 */
	get asset(): Asset { return ASSETS.get(this.assetId) as Asset; }
	/**
	 * Final score calculated based on scorecard rules.
	 */
	score: double;
	/**
	 * Points per rule
	 */
	rulePoints: Map<string, double>;

	constructor(
		asset?: ulong,
		score?: double,
		rulePoints?: Map<string, double>,
	) {
		this.assetId = ID(asset);
		this.score = FLOAT(score as any);
		this.rulePoints = rulePoints ?? new Map;
	}

	toJSON() {
		return {
			"asset": this.assetId || null,
			"score": this.score || 0,
			"rulePoints": MAP_TO_OBJECT(this.rulePoints) || {},
		}
	}
}