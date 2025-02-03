

	/**
	 * A container for the {@link providerRegistration}.
	 */
	export class RespProviderRegistrationBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link ProviderRegistration}.
		 */
		providerRegistrations: RespCodeDeleted[] = [];
	}