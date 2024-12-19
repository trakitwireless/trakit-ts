
	/// <summary>
	/// A container for the <see cref="reportSchedule"/>.
	/// </summary>
	export class RespReportScheduleMerge extends Response {
		/// <summary>
		/// An object which contains the <c>id</c> and <c>company</c> keys when there is no error.
		/// </summary>
		public reportSchedule: RespIdCompany;
	}