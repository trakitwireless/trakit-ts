
	/// <summary>
	/// A container for the <see cref="reportResult"/>.
	/// </summary>
	export class RespReportResultMerge extends Response {
		/// <summary>
		/// An object which contains the <c>id</c> and <c>company</c> keys when there is no error.
		/// </summary>
		public reportResult: RespIdCompany;
	}