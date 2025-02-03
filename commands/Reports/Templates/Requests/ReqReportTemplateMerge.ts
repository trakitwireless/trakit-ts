

	/**
	 * Creates a new or updates an existing {@link ReportTemplate}.
	 */
	export class ReqReportTemplateMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link ReportTemplate}.
		 */
		reportTemplate: ParamReportTemplateMerge;

		/**
		 *  
		 */
public string GetKey() => this.reportTemplate?.id?.toString() ?? "";
	}