

	/**
	 * Creates a new or updates an existing <see cref="ReportTemplate"/>.
	 */
	export class ReqReportTemplateMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="ReportTemplate"/>.
		 */
		reportTemplate: ParamReportTemplateMerge;

		/**
		 *  
		 */
public string GetKey() => this.reportTemplate?.id?.toString() ?? "";
	}