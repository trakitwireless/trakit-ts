

	/**
	 * A container for the {@link providerConfig}.
	 */
	export class RespProviderConfigBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link ProviderConfig}.
		 */
		providerConfigs: RespIdDeleted[] = [];
	}