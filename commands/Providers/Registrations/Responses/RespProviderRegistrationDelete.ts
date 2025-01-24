

	/**
	 * A container for the <see cref="providerRegistration"/>.
	 */
	export class RespProviderRegistrationDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="ProviderRegistration"/>.
		 */
		providerRegistration: RespIdDeleted;
	}