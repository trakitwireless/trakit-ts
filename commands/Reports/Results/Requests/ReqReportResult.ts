

	/**
	 * A container for the <see cref="reportResult"/> object.
	 */
	export abstract class ReqReportResult extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="ReportResult"/>.
		 */
		public reportResult: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.reportResult?.id.toString() ?? "";
	}