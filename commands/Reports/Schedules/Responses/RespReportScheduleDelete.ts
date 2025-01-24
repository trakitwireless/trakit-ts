

	/**
	 * A container for the <see cref="reportSchedule"/>.
	 */
	export class RespReportScheduleDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="ReportSchedule"/>.
		 */
		reportSchedule: RespIdDeleted;
	}