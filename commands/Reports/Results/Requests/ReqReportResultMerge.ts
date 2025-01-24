

	/**
	 * Creates a new or updates an existing <see cref="ReportResult"/>.
	 */
	export class ReqReportResultMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="ReportResult"/>.
		 */
		public reportResult: ParamReportResultMerge;

		/**
		 *  
		 */
public string GetKey() => this.reportResult?.id?.toString() ?? "";
	}