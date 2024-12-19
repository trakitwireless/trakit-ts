

	/// <summary>
	/// Gets details of the specified <see cref="reportSchedule"/>.
	/// </summary>
	export abstract class ReqReportScheduleList extends Request implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return  deleted <see cref="ReportSchedule"/>s.
		/// </summary>
		public includeDeleted: boolean = false;
	}
	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class ReqReportScheduleListByCompany extends ReqReportScheduleList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}