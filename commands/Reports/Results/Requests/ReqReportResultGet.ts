

	/**
	 * Gets details of the specified {@link ReportResult}.
	 */
	export class ReqReportResultGet extends ReqReportResult implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link ReportResult} (if it exists).
		 */
		includeDeleted: boolean = false;
	}