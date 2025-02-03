

	/**
	 * A container for the {@link reportTemplate}.
	 */
	export class RespReportTemplateBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link ReportTemplate}.
		 */
		reportTemplates: RespIdDeleted[] = [];
	}