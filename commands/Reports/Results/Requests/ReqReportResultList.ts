

	/**
	 * Gets details of the specified <see cref="reportResult"/>.
	 */
	export abstract class ReqReportResultList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="ReportResult"/>s.
		 */
		public includeDeleted: boolean = false;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class ReqReportResultListByCompany extends ReqReportResultList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: ParamId;
	}