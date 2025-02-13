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
}