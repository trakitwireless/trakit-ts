

	/// <summary>
	/// Gets details of the specified <see cref="ReportTemplate"/>.
	/// </summary>
	export class ReqReportTemplateGet extends ReqReportTemplate implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="ReportTemplate"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}