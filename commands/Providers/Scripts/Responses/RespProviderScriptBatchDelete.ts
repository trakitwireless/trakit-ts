

	/// <summary>
	/// A container for the <see cref="providerScript"/>.
	/// </summary>
	export class RespProviderScriptBatchDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="ProviderScript"/>.
		/// </summary>
		public providerScripts: RespIdDeleted[] = [];
	}