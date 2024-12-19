

	/// <summary>
	/// A container for the <see cref="reportSchedule"/> object.
	/// </summary>
	export abstract class ReqReportSchedule extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="ReportSchedule"/>.
		/// </summary>
		public reportSchedule: ParamId;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.reportSchedule?.id.toString() ?? "";
	}