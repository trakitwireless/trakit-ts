

	/**
	 * A container for the {@link reportResult} object.
	 */
	export abstract class ReqReportResult extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link ReportResult}.
		 */
		reportResult: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.reportResult?.id.toString() ?? "";
	}