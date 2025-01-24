

	/**
	 * A container for the requested <see cref="reportSchedules"/>.
	 */
	export abstract class RespReportScheduleList extends Response {
		/**
		 * The list of requested <see cref="ReportSchedule"/>s.
		 */
		reportSchedules: ReportSchedule[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespReportScheduleListByCompany extends RespReportScheduleList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: RespId;
	}