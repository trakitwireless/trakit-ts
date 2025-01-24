

	/**
	 * A container for the <see cref="providerRegistration"/>.
	 */
	export class RespProviderRegistrationBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="ProviderRegistration"/>.
		 */
		public providerRegistrations: RespCodeDeleted[] = [];
	}