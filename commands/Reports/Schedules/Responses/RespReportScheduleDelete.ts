

	/**
	 * A container for the {@link reportSchedule}.
	 */
	export class RespReportScheduleDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link ReportSchedule}.
		 */
		reportSchedule: RespIdDeleted;
	}