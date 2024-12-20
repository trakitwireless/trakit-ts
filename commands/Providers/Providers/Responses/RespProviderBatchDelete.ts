

	/// <summary>
	/// A container for the <see cref="provider"/>.
	/// </summary>
	export class RespProviderBatchDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="Provider"/>.
		/// </summary>
		public providers: RespIdendifierDeleted[] = [];
	}