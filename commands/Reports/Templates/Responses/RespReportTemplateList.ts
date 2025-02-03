

	/**
	 * A container for the requested {@link reportTemplates}.
	 */
	export abstract class RespReportTemplateList extends Response {
		/**
		 * The list of requested {@link ReportTemplate}s.
		 */
		reportTemplates: ReportTemplate[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespReportTemplateListByCompany extends RespReportTemplateList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}