

	/**
	 * A container for the <see cref="providerConfig"/>.
	 */
	export class RespProviderConfigBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="ProviderConfig"/>.
		 */
		public providerConfigs: RespIdDeleted[] = [];
	}