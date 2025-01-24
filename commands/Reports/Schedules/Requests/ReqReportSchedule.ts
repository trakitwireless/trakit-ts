

	/**
	 * A container for the <see cref="reportSchedule"/> object.
	 */
	export abstract class ReqReportSchedule extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="ReportSchedule"/>.
		 */
		public reportSchedule: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.reportSchedule?.id.toString() ?? "";
	}