

	/// <summary>
	/// A container for the <see cref="providerConfiguration"/>.
	/// </summary>
	[Obsolete("Use RespProviderConfigGet instead")]
	export class RespProviderConfigurationGet extends Response {
		/// <summary>
		/// The requested <see cref="ProviderConfiguration"/>.
		/// </summary>
		public providerConfiguration: ProviderConfiguration;
	}