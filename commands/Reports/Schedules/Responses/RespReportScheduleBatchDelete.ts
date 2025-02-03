

	/**
	 * A container for the {@link reportSchedule}.
	 */
	export class RespReportScheduleBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link ReportSchedule}.
		 */
		reportSchedules: RespIdDeleted[] = [];
	}