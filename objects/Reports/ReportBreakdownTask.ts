import { MERGE } from "../API/Objects";
import { nothing, uint, ulong } from "../API/Types";
import { AssetAdvanced } from "../Assets/AssetAdvanced";
import { AssetGeneral } from "../Assets/AssetGeneral";
import { DispatchTask } from "../Dispatch/DispatchTask";
import { ReportBreakdown } from "./ReportBreakdown";

/**
 * Dispatch Task information used in this report.
 */
export class ReportBreakdownTask
	extends ReportBreakdown {
	/**
	 * The Task used.
	 */
	task: DispatchTask;
	
	constructor(
		task: DispatchTask,
		asset: ulong,
		instance: uint,
		summaryInstances?: uint[] | nothing,
		general?: AssetGeneral | nothing,
		advanced?: AssetAdvanced | nothing,
	) {
		super(
			asset,
			instance,
			summaryInstances,
			general,
			advanced
		);
		this.task = task;
	}

	override toJSON() {
		return MERGE(
			super.toJSON(),
			{
				"task": this.task.toJSON(),
			}
		);
	}
}