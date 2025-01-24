

	/**
	 * Gets details of the specified <see cref="ReportResult"/>.
	 */
	export class ReqReportResultGet extends ReqReportResult implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="ReportResult"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}