

	/**
	 * A container for the {@link providerConfiguration}.
	 * @deprecated Use RespProviderConfigGet instead
	 */
	export class RespProviderConfigurationGet extends Response {
		/**
		 * The requested {@link ProviderConfiguration}.
		 */
		providerConfiguration: ProviderConfiguration;
	}