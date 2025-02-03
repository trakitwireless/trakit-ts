

	/**
	 * A container for the {@link reportSchedule} object.
	 */
	export abstract class ReqReportSchedule extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link ReportSchedule}.
		 */
		reportSchedule: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.reportSchedule?.id.toString() ?? "";
	}