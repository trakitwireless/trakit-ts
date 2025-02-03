

	/**
	 * Creates a new or updates an existing {@link ReportResult}.
	 */
	export class ReqReportResultMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link ReportResult}.
		 */
		reportResult: ParamReportResultMerge;

		/**
		 *  
		 */
public string GetKey() => this.reportResult?.id?.toString() ?? "";
	}