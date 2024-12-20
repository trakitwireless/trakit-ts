

	/// <summary>
	/// A container for the <see cref="reportSchedule"/>.
	/// </summary>
	export class RespReportScheduleBatchDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="ReportSchedule"/>.
		/// </summary>
		public reportSchedules: RespIdDeleted[] = [];
	}