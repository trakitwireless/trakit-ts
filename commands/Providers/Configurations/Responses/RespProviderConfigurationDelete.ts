

	/**
	 * A container for the {@link providerConfiguration}.
	 * @deprecated Use RespProviderConfigDelete instead
	 */
	export class RespProviderConfigurationDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link ProviderConfiguration}.
		 */
		providerConfiguration: RespIdDeleted;
	}