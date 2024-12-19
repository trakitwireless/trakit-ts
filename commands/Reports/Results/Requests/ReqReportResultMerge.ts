

	/// <summary>
	/// Creates a new or updates an existing <see cref="ReportResult"/>.
	/// </summary>
	export class ReqReportResultMerge extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="ReportResult"/>.
		/// </summary>
		public reportResult: ParamReportResultMerge;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.reportResult?.id?.toString() ?? "";
	}