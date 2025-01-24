

	/**
	 * A container for the <see cref="reportTemplate"/> object.
	 */
	export abstract class ReqReportTemplate extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="ReportTemplate"/>.
		 */
		public reportTemplate: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.reportTemplate?.id.toString() ?? "";
	}