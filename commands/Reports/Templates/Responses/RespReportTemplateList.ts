

	/// <summary>
	/// A container for the requested <see cref="reportTemplates"/>.
	/// </summary>
	export abstract class RespReportTemplateList extends Response {
		/// <summary>
		/// The list of requested <see cref="ReportTemplate"/>s.
		/// </summary>
		public reportTemplates: ReportTemplate[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespReportTemplateListByCompany extends RespReportTemplateList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}