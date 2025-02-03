

	/**
	 * A container for the {@link reportResult}.
	 */
	export class RespReportResultDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link ReportResult}.
		 */
		reportResult: RespIdDeleted;
	}