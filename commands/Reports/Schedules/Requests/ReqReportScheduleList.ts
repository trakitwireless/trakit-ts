

	/**
	 * Gets details of the specified <see cref="reportSchedule"/>.
	 */
	export abstract class ReqReportScheduleList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="ReportSchedule"/>s.
		 */
		public includeDeleted: boolean = false;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class ReqReportScheduleListByCompany extends ReqReportScheduleList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: ParamId;
	}