

	/// <summary>
	/// A container for the requested <see cref="reportSchedules"/>.
	/// </summary>
	export abstract class RespReportScheduleList extends Response {
		/// <summary>
		/// The list of requested <see cref="ReportSchedule"/>s.
		/// </summary>
		public reportSchedules: ReportSchedule[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespReportScheduleListByCompany extends RespReportScheduleList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}