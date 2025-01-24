

	/**
	 * A container for the <see cref="reportResult"/>.
	 */
	export class RespReportResultBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="ReportResult"/>.
		 */
		public reportResults: RespIdDeleted[] = [];
	}