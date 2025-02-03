

	/**
	 * A container for the {@link providerConfig}.
	 */
	export class RespProviderConfigDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link ProviderConfig}.
		 */
		providerConfig: RespIdDeleted;
	}