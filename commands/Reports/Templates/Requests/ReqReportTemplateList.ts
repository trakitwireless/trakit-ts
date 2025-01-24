

	/**
	 * Gets details of the specified <see cref="reportTemplate"/>.
	 */
	export abstract class ReqReportTemplateList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="ReportTemplate"/>s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class ReqReportTemplateListByCompany extends ReqReportTemplateList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: ParamId;
	}