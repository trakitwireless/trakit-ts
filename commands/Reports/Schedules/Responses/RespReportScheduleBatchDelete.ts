

	/**
	 * A container for the <see cref="reportSchedule"/>.
	 */
	export class RespReportScheduleBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="ReportSchedule"/>.
		 */
		reportSchedules: RespIdDeleted[] = [];
	}