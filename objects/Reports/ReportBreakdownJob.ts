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
}