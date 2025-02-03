

	/**
	 * A container for the {@link reportTemplate} object.
	 */
	export abstract class ReqReportTemplate extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link ReportTemplate}.
		 */
		reportTemplate: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.reportTemplate?.id.toString() ?? "";
	}