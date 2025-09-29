import { FLOAT } from "../API/Constants";
import { ID, JSON_NUMBER } from "../API/Functions";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { TimeSpan } from "../API/TimeSpan";
import { double, timespan, uint, ulong, JsonObject } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { ASSETS } from "../storage";

/**
 * Totalled information from all the results of the report.
 */
export class ReportTotal
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: JsonObject) {
		return new ReportTotal(
			json["asset"]as ulong,
			json["stateDetail"]as string,
			json["summaryCount"]as uint,
			json["duration"] as timespan,
			json["distance"]as double,
		);
	}
	/**
	 * The asset to which this report total belongs.
	 * {@link Asset.id}
	 */
	assetId: ulong;
	/**
	 * The asset to which this report total belongs.
	 * {@link Asset.id}
	 */
	get asset(): Asset { return ASSETS.get(this.assetId) as Asset; }
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

	constructor(
		asset?: ulong,
		stateDetail?: string,
		summaryCount?: uint,
		duration?: TimeSpan | timespan | number,
		distance?: double,
	) {
		this.assetId = ID(asset);
		this.stateDetail = stateDetail || "";
		this.summaryCount = ID(summaryCount);
		this.duration = new TimeSpan(duration);
		this.distance = FLOAT(distance as any);
	}

	toJSON() {
		return {
			"asset": JSON_NUMBER(this.assetId),
			"stateDetail": this.stateDetail || "",
			"summaryCount": JSON_NUMBER(this.summaryCount),
			"duration": this.duration.toString(),
			"distance": JSON_NUMBER(this.distance),
		};
	}
}