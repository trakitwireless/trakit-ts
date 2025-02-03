

	/**
	 * Gets details of the specified {@link ReportTemplate}.
	 */
	export class ReqReportTemplateGet extends ReqReportTemplate implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link ReportTemplate} (if it exists).
		 */
		includeDeleted: boolean = false;
	}