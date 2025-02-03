

	/**
	 * Gets details of the specified {@link reportSchedule}.
	 */
	export abstract class ReqReportScheduleList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link ReportSchedule}s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqReportScheduleListByCompany extends ReqReportScheduleList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}