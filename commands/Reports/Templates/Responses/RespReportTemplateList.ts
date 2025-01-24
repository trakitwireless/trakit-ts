

	/**
	 * A container for the requested <see cref="reportTemplates"/>.
	 */
	export abstract class RespReportTemplateList extends Response {
		/**
		 * The list of requested <see cref="ReportTemplate"/>s.
		 */
		public reportTemplates: ReportTemplate[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespReportTemplateListByCompany extends RespReportTemplateList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: RespId;
	}