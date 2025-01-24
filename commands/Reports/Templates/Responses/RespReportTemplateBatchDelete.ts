

	/**
	 * A container for the <see cref="reportTemplate"/>.
	 */
	export class RespReportTemplateBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="ReportTemplate"/>.
		 */
		reportTemplates: RespIdDeleted[] = [];
	}