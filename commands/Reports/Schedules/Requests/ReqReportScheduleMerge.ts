

	/**
	 * Creates a new or updates an existing {@link ReportSchedule}.
	 */
	export class ReqReportScheduleMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link ReportSchedule}.
		 */
		reportSchedule: ParamReportScheduleMerge;

		/**
		 *  
		 */
public string GetKey() => this.reportSchedule?.id?.toString() ?? "";
	}