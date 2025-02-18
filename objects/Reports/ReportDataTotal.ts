import { FLOAT } from "../API/Constants";
import { ID, JSON_NUMBER } from "../API/Functions";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { TimeSpan } from "../API/TimeSpan";
import { double, timespan, uint, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { ASSETS } from "../Storage";

/**
 * Totalled information from all the results of the report.
 *  <override name="ReportTotal" />
 */
export class ReportDataTotal
	implements ISerializable {
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
	 *  <override max-length="100" />
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
		duration?: TimeSpan | timespan,
		distance?: double
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