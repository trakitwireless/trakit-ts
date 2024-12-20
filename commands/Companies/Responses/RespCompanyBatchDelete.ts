

	/// <summary>
	/// A container for the <see cref="company"/>.
	/// </summary>
	export class RespCompanyBatchDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="Company"/>.
		/// </summary>
		public companies: RespIdDeleted[] = [];
	}