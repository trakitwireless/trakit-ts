


	/// <summary>
	/// A container for the <see cref="formResult"/>.
	/// </summary>
	export class RespFormResultBatchDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="FormResult"/>.
		/// </summary>
		public formResults: RespIdDeleted[] = [];
	}