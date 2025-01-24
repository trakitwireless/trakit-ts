

	/**
	 * A container for the <see cref="providerScript"/>.
	 */
	export class RespProviderScriptDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="ProviderScript"/>.
		 */
		providerScript: RespIdDeleted;
	}