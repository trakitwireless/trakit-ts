

	/// <summary>
	/// A container for the requested <see cref="reportResults"/>.
	/// </summary>
	export abstract class RespReportResultList extends Response {
		/// <summary>
		/// The list of requested <see cref="ReportResult"/>s.
		/// </summary>
		public reportResults: ReportResult[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespReportResultListByCompany extends RespReportResultList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}