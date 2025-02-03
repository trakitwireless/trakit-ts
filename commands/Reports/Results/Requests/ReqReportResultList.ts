

	/**
	 * Gets details of the specified {@link reportResult}.
	 */
	export abstract class ReqReportResultList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link ReportResult}s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqReportResultListByCompany extends ReqReportResultList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}