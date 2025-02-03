

	/**
	 * A container for the requested {@link reportSchedules}.
	 */
	export abstract class RespReportScheduleList extends Response {
		/**
		 * The list of requested {@link ReportSchedule}s.
		 */
		reportSchedules: ReportSchedule[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespReportScheduleListByCompany extends RespReportScheduleList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}