

	/**
	 * A container for the requested <see cref="providerConfigurationTypes"/>.
	 * @deprecated Use RespProviderScriptList instead
	 */
	export abstract class RespProviderConfigurationTypeList extends Response {
		/**
		 * The list of requested <see cref="ProviderConfigurationType"/>s.
		 */
		providerConfigurationTypes: ProviderConfigurationType[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 * @deprecated Use RespProviderScriptListByCompany instead
	 */
	export class RespProviderConfigurationTypeListByCompany extends RespProviderConfigurationTypeList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: RespId;
	}