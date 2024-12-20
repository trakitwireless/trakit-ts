

	/// <summary>
	/// A container for the <see cref="company"/>.
	/// </summary>
	export class RespCompanyDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="Company"/>.
		/// </summary>
		public company: RespIdDeleted;
	}