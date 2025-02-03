

	/**
	 * A container for the {@link reportTemplate}.
	 */
	export class RespReportTemplateDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link ReportTemplate}.
		 */
		reportTemplate: RespIdDeleted;
	}