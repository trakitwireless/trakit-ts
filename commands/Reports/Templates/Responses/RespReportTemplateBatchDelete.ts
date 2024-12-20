

	/// <summary>
	/// A container for the <see cref="reportTemplate"/>.
	/// </summary>
	export class RespReportTemplateBatchDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="ReportTemplate"/>.
		/// </summary>
		public reportTemplates: RespIdDeleted[] = [];
	}