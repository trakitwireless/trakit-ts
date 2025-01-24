

	/**
	 * A container for the <see cref="providerConfiguration"/>.
	 * @deprecated Use RespProviderConfigDelete instead
	 */
	export class RespProviderConfigurationDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="ProviderConfiguration"/>.
		 */
		providerConfiguration: RespIdDeleted;
	}