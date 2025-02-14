import { ARRAY_TO_JSON } from "../API/Arrays";
import { FLOAT } from "../API/Constants";
import { DATE, ID, JSON_DATE, JSON_NUMBER } from "../API/Functions";
import { LatLng } from "../API/Geography/LatLng";
import { IBelongAsset } from "../API/Interfaces/IBelongAsset";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { TimeSpan } from "../API/TimeSpan";
import { double, uint, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { ASSETS } from "../Storage";
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
	static fromJSON(json: any) {
		return new ReportSummary(
			ID(json["asset"]),
			json["stateDetail"],
			ID(json["instance"]),
			ID(json["instancesCount"]),
			DATE(json["startingUtc"]),
			json["startingReason"],
			DATE(json["endingUtc"]),
			json["endingReason"],
			FLOAT(json["distance"]),
			(json["polyline"] as any[])?.map(LatLng.fromJSON) as LatLng[],
			Asset.fromJSON(json["firstState"]),
			Asset.fromJSON(json["lastState"])
		);
	}

	/**
	 * The asset to which this summary instance belongs.
	 * {@link Asset.id}
	 */
	assetId: ulong = NaN;
	/**
	 * The asset to which this summary instance belongs.
	 * {@link Asset.id}
	 */
	get asset(): Asset { return ASSETS.get(this.assetId) as Asset; }
	/**
	 * Code given to this summary instance for an asset.
	 *  <override max-length="100" />
	 */
	stateDetail: string = "";
	/**
	 * Identifier of the summary instance in the report.
	 */
	instance: uint = NaN;
	/**
	 * The number of events included in calculating this summary instance.
	 */
	instancesCount: uint = NaN;
	/**
	 * Date/time stamp of the first event in this summary's sequence.
	 */
	startingUtc: Date = DATE();
	/**
	 * The reason code that this summary instance began.
	 */
	startingReason: ReportSummaryReason;
	/**
	 * Date/time stamp of the last event in this summary's sequence.
	 */
	endingUtc: Date = DATE();
	/**
	 * The reason code that this summary instance ended.
	 */
	endingReason: ReportSummaryReason = ReportSummaryReason.outsideRange;
	/**
	 * The distance travelled in kilometres by the asset during this summary instance.
	 */
	distance: double = NaN;
	/**
	 * The amount of time that passed.
	 */
	get duration(): TimeSpan { return TimeSpan.fromMilliseconds((this.endingUtc as any) - (this.startingUtc as any)); }
	/**
	 * A simplified polyline of all the asset's positions in sequence.
	 */
	polyline: LatLng[] = [];
	/**
	 * The first asset state which begins this summary instance.
	 */
	firstState: Asset;
	/**
	 * The asset state that ended this summary instance.
	 */
	lastState: Asset;

	constructor(
		asset: ulong,
		stateDetail: string,
		instance: uint,
		instancesCount: uint,
		startingUtc: Date,
		startingReason: ReportSummaryReason,
		endingUtc: Date,
		endingReason: ReportSummaryReason,
		distance: double,
		polyline: LatLng[],
		firstState: Asset,
		lastState: Asset
	) {
		this.assetId = ID(asset);
		this.stateDetail = stateDetail || "";
		this.instance = ID(instance);
		this.instancesCount = ID(instancesCount);
		this.startingUtc = DATE(startingUtc);
		this.startingReason = ReportSummaryReason[startingReason] || ReportSummaryReason.outsideRange;
		this.endingUtc = DATE(endingUtc);
		this.endingReason = ReportSummaryReason[endingReason] || ReportSummaryReason.outsideRange;
		this.distance = FLOAT(distance as any);
		this.polyline = [...(polyline || [])];
		this.firstState = firstState;
		this.lastState = lastState;
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
			"polyline": this.polyline?.map(ARRAY_TO_JSON) ?? [],
			"firstState": this.firstState,
			"lastState": this.lastState,
		};
	}
}