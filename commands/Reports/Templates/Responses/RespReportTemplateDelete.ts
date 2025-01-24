

	/**
	 * A container for the <see cref="reportTemplate"/>.
	 */
	export class RespReportTemplateDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="ReportTemplate"/>.
		 */
		reportTemplate: RespIdDeleted;
	}