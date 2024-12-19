

	/// <summary>
	/// A container for the <see cref="providerConfigurationType"/>.
	/// </summary>
	[Obsolete("Use RespProviderScriptGet instead")]
	export class RespProviderConfigurationTypeGet extends Response {
		/// <summary>
		/// The requested <see cref="ProviderConfigurationType"/>.
		/// </summary>
		public providerConfigurationType: ProviderConfigurationType;
	}