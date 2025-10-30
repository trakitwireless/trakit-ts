import { ARRAY_TO_JSON } from "../API/Arrays";
import { FLOAT } from "../API/Constants";
import { DATE, ID, JSON_DATE, JSON_NUMBER } from "../API/Functions";
import { ILatLng } from "../API/Geography/Interfaces";
import { LatLng } from "../API/Geography/LatLng";
import { IBelongAsset } from "../API/Interfaces/IBelongAsset";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { TimeSpan } from "../API/TimeSpan";
import { datetime, double, nothing, uint, ulong, JsonObject } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { ASSETS } from "../storage";
import { ReportSummaryReason } from './ReportSummaryReason';

/**
 * Summarized asset details.
 */
export class ReportSummary
	implements ISerializable, IBelongAsset {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: JsonObject) {
		return new ReportSummary(
			json["asset"] as ulong,
			json["stateDetail"] as string,
			json["instance"] as uint,
			json["instancesCount"] as uint,
			json["startingUtc"] as datetime,
			json["startingReason"] as ReportSummaryReason,
			json["endingUtc"] as datetime,
			json["endingReason"] as ReportSummaryReason,
			json["distance"] as double,
			json["polyline"] as (ILatLng | JsonObject)[],
			json["firstState"]
				? new Asset(json["firstState"] as JsonObject)
				: null,
			json["lastState"]
				? new Asset(json["lastState"] as JsonObject)
				: null,
		);
	}

	/**
	 * The asset to which this summary instance belongs.
	 * {@link Asset.id}
	 */
	assetId: ulong;
	/**
	 * The asset to which this summary instance belongs.
	 * {@link Asset.id}
	 */
	get asset(): Asset { return ASSETS.get(this.assetId) as Asset; }
	/**
	 * Code given to this summary instance for an asset.
	 */
	stateDetail: string;
	/**
	 * Identifier of the summary instance in the report.
	 */
	instance: uint;
	/**
	 * The number of events included in calculating this summary instance.
	 */
	instancesCount: uint;
	/**
	 * Date/time stamp of the first event in this summary's sequence.
	 */
	startingUtc: Date;
	/**
	 * The reason code that this summary instance began.
	 */
	startingReason: ReportSummaryReason;
	/**
	 * Date/time stamp of the last event in this summary's sequence.
	 */
	endingUtc: Date;
	/**
	 * The reason code that this summary instance ended.
	 */
	endingReason: ReportSummaryReason;
	/**
	 * The distance travelled in kilometres by the asset during this summary instance.
	 */
	distance: double;
	/**
	 * The amount of time that passed.
	 */
	get duration(): TimeSpan { return TimeSpan.fromMilliseconds((this.endingUtc as any) - (this.startingUtc as any)); }
	/**
	 * A simplified polyline of all the asset's positions in sequence.
	 */
	polyline: LatLng[];
	/**
	 * The first asset state which begins this summary instance.
	 */
	firstState: Asset | null;
	/**
	 * The asset state that ended this summary instance.
	 */
	lastState: Asset | null;

	constructor(
		asset: ulong,
		stateDetail: string,
		instance: uint,
		instancesCount: uint,
		startingUtc: Date | number | datetime,
		startingReason: ReportSummaryReason,
		endingUtc: Date | number | datetime,
		endingReason: ReportSummaryReason,
		distance?: double | nothing,
		polyline?: (ILatLng | JsonObject)[] | nothing,
		firstState?: Asset | nothing,
		lastState?: Asset | nothing,
	) {
		this.assetId = ID(asset);
		this.stateDetail = stateDetail || "";
		this.instance = ID(instance);
		this.instancesCount = ID(instancesCount);
		this.startingUtc = DATE(startingUtc);
		this.startingReason = ReportSummaryReason[startingReason as ReportSummaryReason] || ReportSummaryReason.outsideRange;
		this.endingUtc = DATE(endingUtc);
		this.endingReason = ReportSummaryReason[endingReason as ReportSummaryReason] || ReportSummaryReason.outsideRange;
		this.distance = FLOAT(distance as any);
		this.polyline = polyline?.map(LatLng.fromJSON) ?? [];
		this.firstState = firstState || null;
		this.lastState = lastState || null;
	}

	toJSON() {
		return {
			"asset": JSON_NUMBER(this.assetId),
			"stateDetail": this.stateDetail || "",
			"instance": JSON_NUMBER(this.instance),
			"instancesCount": JSON_NUMBER(this.instancesCount),
			"startingUtc": JSON_DATE(this.startingUtc),
			"startingReason": ReportSummaryReason[this.startingReason] || ReportSummaryReason.outsideRange,
			"endingUtc": JSON_DATE(this.endingUtc),
			"endingReason": ReportSummaryReason[this.endingReason] || ReportSummaryReason.outsideRange,
			"distance": JSON_NUMBER(this.distance),
			"polyline": this.polyline.map(ARRAY_TO_JSON),
			"firstState": this.firstState?.toJSON() ?? null,
			"lastState": this.lastState?.toJSON() ?? null,
		};
	}
}