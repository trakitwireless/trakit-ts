
	/// <summary>
	/// A container for the <see cref="company"/>.
	/// </summary>
	export class RespCompanyMerge extends Response {
		/// <summary>
		/// An object which contains the <c>id</c> and <c>company</c> keys when there is no error.
		/// </summary>
		public company: RespIdCompany;
	}