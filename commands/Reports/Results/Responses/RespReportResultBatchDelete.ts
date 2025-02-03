

	/**
	 * A container for the {@link reportResult}.
	 */
	export class RespReportResultBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link ReportResult}.
		 */
		reportResults: RespIdDeleted[] = [];
	}