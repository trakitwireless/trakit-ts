

	/**
	 * A container for the {@link providerScript}.
	 */
	export class RespProviderScriptBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link ProviderScript}.
		 */
		providerScripts: RespIdDeleted[] = [];
	}