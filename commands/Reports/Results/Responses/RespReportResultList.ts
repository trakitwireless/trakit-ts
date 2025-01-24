

	/**
	 * A container for the requested <see cref="reportResults"/>.
	 */
	export abstract class RespReportResultList extends Response {
		/**
		 * The list of requested <see cref="ReportResult"/>s.
		 */
		reportResults: ReportResult[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespReportResultListByCompany extends RespReportResultList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: RespId;
	}