

	/**
	 * Creates a new or updates an existing <see cref="ReportSchedule"/>.
	 */
	export class ReqReportScheduleMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="ReportSchedule"/>.
		 */
		reportSchedule: ParamReportScheduleMerge;

		/**
		 *  
		 */
public string GetKey() => this.reportSchedule?.id?.toString() ?? "";
	}