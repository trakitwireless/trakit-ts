

	/**
	 * Gets details of the specified {@link reportTemplate}.
	 */
	export abstract class ReqReportTemplateList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link ReportTemplate}s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqReportTemplateListByCompany extends ReqReportTemplateList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}