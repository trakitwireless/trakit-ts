

	/// <summary>
	/// Creates a new or updates an existing <see cref="ReportTemplate"/>.
	/// </summary>
	export class ReqReportTemplateMerge extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="ReportTemplate"/>.
		/// </summary>
		public reportTemplate: ParamReportTemplateMerge;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.reportTemplate?.id?.toString() ?? "";
	}