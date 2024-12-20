

	/// <summary>
	/// A container for the <see cref="reportTemplate"/>.
	/// </summary>
	export class RespReportTemplateDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="ReportTemplate"/>.
		/// </summary>
		public reportTemplate: RespIdDeleted;
	}