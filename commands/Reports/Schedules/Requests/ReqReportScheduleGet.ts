

	/**
	 * Gets details of the specified <see cref="ReportSchedule"/>.
	 */
	export class ReqReportScheduleGet extends ReqReportSchedule implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="ReportSchedule"/> (if it exists).
		 */
		public includeDeleted: boolean = false;
	}