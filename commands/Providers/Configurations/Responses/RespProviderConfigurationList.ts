

	/**
	 * A container for the requested {@link providerConfigurations}.
	 * @deprecated Use RespProviderConfigList instead
	 */
	export abstract class RespProviderConfigurationList extends Response {
		/**
		 * The list of requested {@link ProviderConfiguration}s.
		 */
		providerConfigurations: ProviderConfiguration[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 * @deprecated Use RespProviderConfigListByCompany instead
	 */
	export class RespProviderConfigurationListByCompany extends RespProviderConfigurationList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}