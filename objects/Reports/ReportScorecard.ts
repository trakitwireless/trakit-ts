import { FLOAT } from "../API/Constants";
import { ID, MAP_TO_JSON, JSON_TO_MAP, JSON_TO_MAP_BY_PREDICATE } from "../API/Functions";
import { IBelongAsset } from "../API/Interfaces/IBelongAsset";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { datetime, double, ulong, JsonObject } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { ASSETS } from "../storage";

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
	static fromJSON(json: JsonObject) {
		return new ReportScorecard(
			json["asset"] as ulong,
			json["score"] as double,
			JSON_TO_MAP_BY_PREDICATE(
				json["rulePoints"] as object || {},
				(k, v) => [k, FLOAT(v)]
			),
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
			"rulePoints": MAP_TO_JSON(this.rulePoints) || {},
		}
	}
}