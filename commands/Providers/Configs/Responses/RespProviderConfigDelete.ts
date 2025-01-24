

	/**
	 * A container for the <see cref="providerConfig"/>.
	 */
	export class RespProviderConfigDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="ProviderConfig"/>.
		 */
		public providerConfig: RespIdDeleted;
	}