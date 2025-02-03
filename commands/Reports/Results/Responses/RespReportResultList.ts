

	/**
	 * A container for the requested {@link reportResults}.
	 */
	export abstract class RespReportResultList extends Response {
		/**
		 * The list of requested {@link ReportResult}s.
		 */
		reportResults: ReportResult[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespReportResultListByCompany extends RespReportResultList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}