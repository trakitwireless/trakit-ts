

	/// <summary>
	/// Creates a new or updates an existing <see cref="ReportSchedule"/>.
	/// </summary>
	export class ReqReportScheduleMerge extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="ReportSchedule"/>.
		/// </summary>
		public reportSchedule: ParamReportScheduleMerge;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.reportSchedule?.id?.toString() ?? "";
	}