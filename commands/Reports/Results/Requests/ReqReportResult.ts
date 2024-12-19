

	/// <summary>
	/// A container for the <see cref="reportResult"/> object.
	/// </summary>
	export abstract class ReqReportResult extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="ReportResult"/>.
		/// </summary>
		public reportResult: ParamId;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.reportResult?.id.toString() ?? "";
	}