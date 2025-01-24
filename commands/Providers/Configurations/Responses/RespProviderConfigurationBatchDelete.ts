

	/**
	 * A container for the <see cref="providerConfiguration"/>.
	 * @deprecated Use RespProviderConfigBatchDelete instead
	 */
	export class RespProviderConfigurationBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="ProviderConfiguration"/>.
		 */
		public providerConfigurations: RespIdDeleted[] = [];
	}