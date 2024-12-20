

	/// <summary>
	/// A container for the <see cref="reportTemplate"/> object.
	/// </summary>
	export abstract class ReqReportTemplate extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="ReportTemplate"/>.
		/// </summary>
		public reportTemplate: ParamId;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.reportTemplate?.id.toString() ?? "";
	}