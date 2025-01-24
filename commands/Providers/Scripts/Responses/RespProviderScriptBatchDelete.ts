

	/**
	 * A container for the <see cref="providerScript"/>.
	 */
	export class RespProviderScriptBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="ProviderScript"/>.
		 */
		public providerScripts: RespIdDeleted[] = [];
	}