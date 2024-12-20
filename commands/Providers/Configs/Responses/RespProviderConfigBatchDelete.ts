

	/// <summary>
	/// A container for the <see cref="providerConfig"/>.
	/// </summary>
	export class RespProviderConfigBatchDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="ProviderConfig"/>.
		/// </summary>
		public providerConfigs: RespIdDeleted[] = [];
	}