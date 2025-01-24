

	/**
	 * A container for the requested <see cref="providerConfigurations"/>.
	 * @deprecated Use RespProviderConfigList instead
	 */
	export abstract class RespProviderConfigurationList extends Response {
		/**
		 * The list of requested <see cref="ProviderConfiguration"/>s.
		 */
		providerConfigurations: ProviderConfiguration[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 * @deprecated Use RespProviderConfigListByCompany instead
	 */
	export class RespProviderConfigurationListByCompany extends RespProviderConfigurationList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: RespId;
	}