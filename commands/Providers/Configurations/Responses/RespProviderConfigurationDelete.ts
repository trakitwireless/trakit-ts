

	/// <summary>
	/// A container for the <see cref="providerConfiguration"/>.
	/// </summary>
	[Obsolete("Use RespProviderConfigDelete instead")]
	export class RespProviderConfigurationDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="ProviderConfiguration"/>.
		/// </summary>
		public providerConfiguration: RespIdDeleted;
	}