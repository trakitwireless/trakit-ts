

	/**
	 * Gets details of the specified {@link ReportSchedule}.
	 */
	export class ReqReportScheduleGet extends ReqReportSchedule implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link ReportSchedule} (if it exists).
		 */
		includeDeleted: boolean = false;
	}