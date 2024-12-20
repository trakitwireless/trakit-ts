

	/// <summary>
	/// A container for the <see cref="reportSchedule"/>.
	/// </summary>
	export class RespReportScheduleDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="ReportSchedule"/>.
		/// </summary>
		public reportSchedule: RespIdDeleted;
	}