

	/**
	 * A container for the {@link providerConfiguration}.
	 * @deprecated Use RespProviderConfigBatchDelete instead
	 */
	export class RespProviderConfigurationBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link ProviderConfiguration}.
		 */
		providerConfigurations: RespIdDeleted[] = [];
	}