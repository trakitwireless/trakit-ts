

	/// <summary>
	/// Gets details of the specified <see cref="ReportResult"/>.
	/// </summary>
	export class ReqReportResultGet extends ReqReportResult implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="ReportResult"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}