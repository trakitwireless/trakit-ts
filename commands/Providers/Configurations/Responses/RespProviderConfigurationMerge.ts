

	/**
	 * A container for the <see cref="providerConfiguration"/>.
	 * @deprecated Use RespProviderConfigMerge instead
	 */
	export class RespProviderConfigurationMerge extends Response {
		/**
		 * An object which contains the <c>id</c> and <c>company</c> keys when there is no error.
		 */
		providerConfiguration: RespIdCompany;
	}