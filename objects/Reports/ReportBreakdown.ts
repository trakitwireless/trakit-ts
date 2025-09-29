import { ID, JSON_NUMBER } from "../API/Functions";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { nothing, uint, ulong, JsonObject } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { AssetAdvanced } from "../Assets/AssetAdvanced";
import { AssetGeneral } from "../Assets/AssetGeneral";
import { DispatchJob } from "../Dispatch/DispatchJob";
import { DispatchTask } from "../Dispatch/DispatchTask";
import { AssetMessage } from "../Messaging/AssetMessage";
import { ASSETS } from "../storage";
import { ReportBreakdownJob } from "./ReportBreakdownJob";
import { ReportBreakdownMessage } from "./ReportBreakdownMessage";
import { ReportBreakdownTask } from "./ReportBreakdownTask";

/**
 * Asset information used in calculating a summary instance.
 */
export class ReportBreakdown
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: JsonObject) {
		if (typeof json["job"] === "object") {
			return new ReportBreakdownJob(
				new DispatchJob(json["job"]),
				json["asset"] as ulong,
				json["instance"] as uint,
				(json["summaryInstances"] as ulong[])?.map(ID),
				json["general"]
					? AssetGeneral.fromJSON(json["general"])
					: json["general"],
				json["advanced"]
					? AssetAdvanced.fromJSON(json["advanced"])
					: json["advanced"],
			);
		}
		if (typeof json["message"] === "object") {
			return new ReportBreakdownMessage(
				new AssetMessage(json["message"]),
				json["asset"] as ulong,
				json["instance"] as uint,
				(json["summaryInstances"] as ulong[])?.map(ID),
				json["general"]
					? AssetGeneral.fromJSON(json["general"])
					: json["general"],
				json["advanced"]
					? AssetAdvanced.fromJSON(json["advanced"])
					: json["advanced"]
			);
		}
		if (typeof json["task"] === "object") {
			return new ReportBreakdownTask(
				new DispatchTask(json["task"]),
				json["asset"] as ulong,
				json["instance"] as uint,
				(json["summaryInstances"] as ulong[])?.map(ID),
				json["general"]
					? AssetGeneral.fromJSON(json["general"])
					: json["general"],
				json["advanced"]
					? AssetAdvanced.fromJSON(json["advanced"])
					: json["advanced"]
			);
		}
		return new ReportBreakdown(
			json["asset"] as ulong,
			json["instance"] as uint,
			(json["summaryInstances"] as ulong[])?.map(ID),
			json["general"]
				? AssetGeneral.fromJSON(json["general"])
				: json["general"],
			json["advanced"]
				? AssetAdvanced.fromJSON(json["advanced"])
				: json["advanced"]
		);
	}

	/**
	 * The asset to which this event data belongs.
	 */
	assetId: ulong;
	/**
	 * The asset to which this event data belongs.
	 */
	get asset(): Asset { return ASSETS.get(this.assetId) as Asset; }
	/**
	 * Report specific identifier of the event data.
	 */
	instance: uint;
	/**
	 * Identifiers of the summary instances that used this event.
	 */
	summaryInstances: uint[];
	/**
	 * General Asset information.
	 */
	general: AssetGeneral | null;
	/**
	 * Advanced/detailed information used.
	 */
	advanced: AssetAdvanced | null;

	constructor(
		asset: ulong,
		instance: uint,
		summaryInstances?: uint[] | nothing,
		general?: AssetGeneral | nothing,
		advanced?: AssetAdvanced | nothing,
	) {
		this.assetId = ID(asset);
		this.instance = ID(instance);
		this.summaryInstances = summaryInstances?.map(ID) ?? [];
		this.general = general || null;
		this.advanced = advanced || null;
	}

	toJSON() {
		return {
			"asset": JSON_NUMBER(this.assetId),
			"instance": JSON_NUMBER(this.instance),
			"summaryInstances": [...(this.summaryInstances || [])],
			"general": this.general?.toJSON() ?? null,
			"advanced": this.advanced?.toJSON() ?? null,
		};
	}
}