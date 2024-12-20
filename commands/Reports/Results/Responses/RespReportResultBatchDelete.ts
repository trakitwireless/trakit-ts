

	/// <summary>
	/// A container for the <see cref="reportResult"/>.
	/// </summary>
	export class RespReportResultBatchDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="ReportResult"/>.
		/// </summary>
		public reportResults: RespIdDeleted[] = [];
	}