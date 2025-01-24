

	/**
	 * A container for the <see cref="providerConfiguration"/>.
	 * @deprecated Use RespProviderConfigGet instead
	 */
	export class RespProviderConfigurationGet extends Response {
		/**
		 * The requested <see cref="ProviderConfiguration"/>.
		 */
		public providerConfiguration: ProviderConfiguration;
	}