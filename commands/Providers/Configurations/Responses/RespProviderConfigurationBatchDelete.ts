

	/// <summary>
	/// A container for the <see cref="providerConfiguration"/>.
	/// </summary>
	[Obsolete("Use RespProviderConfigBatchDelete instead")]
	export class RespProviderConfigurationBatchDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="ProviderConfiguration"/>.
		/// </summary>
		public providerConfigurations: RespIdDeleted[] = [];
	}