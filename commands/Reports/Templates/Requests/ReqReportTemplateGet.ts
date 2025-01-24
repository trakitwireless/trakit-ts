

	/**
	 * Gets details of the specified <see cref="ReportTemplate"/>.
	 */
	export class ReqReportTemplateGet extends ReqReportTemplate implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="ReportTemplate"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}