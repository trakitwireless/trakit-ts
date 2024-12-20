

	/// <summary>
	/// Gets details of the specified <see cref="ReportSchedule"/>.
	/// </summary>
	export class ReqReportScheduleGet extends ReqReportSchedule implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="ReportSchedule"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}