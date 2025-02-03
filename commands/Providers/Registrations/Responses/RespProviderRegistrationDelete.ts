

	/**
	 * A container for the {@link providerRegistration}.
	 */
	export class RespProviderRegistrationDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link ProviderRegistration}.
		 */
		providerRegistration: RespIdDeleted;
	}