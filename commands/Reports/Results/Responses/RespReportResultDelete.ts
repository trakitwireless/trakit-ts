

	/**
	 * A container for the <see cref="reportResult"/>.
	 */
	export class RespReportResultDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="ReportResult"/>.
		 */
		public reportResult: RespIdDeleted;
	}