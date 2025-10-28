import { nothing, uint, ulong } from "../API/Types";
import { AssetAdvanced } from "../Assets/AssetAdvanced";
import { AssetGeneral } from "../Assets/AssetGeneral";
import { DispatchJob } from "../Dispatch/DispatchJob";
import { ReportBreakdown } from "./ReportBreakdown";

/**
 * Dispatch Job information used in this report.
 */
export class ReportBreakdownJob
	extends ReportBreakdown {
	/**
	 * The Job used.
	 */
	job: DispatchJob;

	constructor(
		job: DispatchJob,
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
		this.job = job;
	}

	override toJSON() {
		return {
			...super.toJSON(),
			"job": this.job.toJSON(),
		};
	}
}