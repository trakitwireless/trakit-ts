

	/// <summary>
	/// Gets details of the specified <see cref="reportTemplate"/>.
	/// </summary>
	export abstract class ReqReportTemplateList extends Request implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return  deleted <see cref="ReportTemplate"/>s.
		/// </summary>
		public includeDeleted: boolean = false;
	}
	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class ReqReportTemplateListByCompany extends ReqReportTemplateList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}