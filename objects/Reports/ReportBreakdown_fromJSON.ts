import { ID } from "../API/Functions";
import { JsonObject, uint, ulong } from "../API/Types";
import { AssetAdvanced } from "../Assets/AssetAdvanced";
import { AssetGeneral } from "../Assets/AssetGeneral";
import { DispatchJob } from "../Dispatch/DispatchJob";
import { DispatchTask } from "../Dispatch/DispatchTask";
import { AssetMessage } from "../Messaging/AssetMessage";
import { ReportBreakdown } from "./ReportBreakdown";
import { ReportBreakdownJob } from "./ReportBreakdownJob";
import { ReportBreakdownMessage } from "./ReportBreakdownMessage";
import { ReportBreakdownTask } from "./ReportBreakdownTask";

/**
 * Instantiates a breakdown based on the shape of the given JSON.
 * @param json 
 * @returns 
 */
ReportBreakdown.fromJSON = function (json: JsonObject) {
	if (typeof json["job"] === "object") {
		return new ReportBreakdownJob(
			new DispatchJob(json["job"] as JsonObject),
			json["asset"] as ulong,
			json["instance"] as uint,
			(json["summaryInstances"] as ulong[])?.map(ID),
			json["general"]
				? new AssetGeneral(json["general"] as JsonObject)
				: null,
			json["advanced"]
				? new AssetAdvanced(json["advanced"] as JsonObject)
				: null,
		);
	}
	if (typeof json["message"] === "object") {
		return new ReportBreakdownMessage(
			new AssetMessage(json["message"] as JsonObject),
			json["asset"] as ulong,
			json["instance"] as uint,
			(json["summaryInstances"] as ulong[])?.map(ID),
			json["general"]
				? new AssetGeneral(json["general"] as JsonObject)
				: null,
			json["advanced"]
				? new AssetAdvanced(json["advanced"] as JsonObject)
				: null,
		);
	}
	if (typeof json["task"] === "object") {
		return new ReportBreakdownTask(
			new DispatchTask(json["task"] as JsonObject),
			json["asset"] as ulong,
			json["instance"] as uint,
			(json["summaryInstances"] as ulong[])?.map(ID),
			json["general"]
				? new AssetGeneral(json["general"] as JsonObject)
				: null,
			json["advanced"]
				? new AssetAdvanced(json["advanced"] as JsonObject)
				: null,
		);
	}
	return new ReportBreakdown(
		json["asset"] as ulong,
		json["instance"] as uint,
		(json["summaryInstances"] as ulong[])?.map(ID),
		json["general"]
			? new AssetGeneral(json["general"] as JsonObject)
			: null,
		json["advanced"]
			? new AssetAdvanced(json["advanced"] as JsonObject)
			: null,
	);
};