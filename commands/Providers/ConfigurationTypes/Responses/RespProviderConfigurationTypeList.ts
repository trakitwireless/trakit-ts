

	/**
	 * A container for the requested {@link providerConfigurationTypes}.
	 * @deprecated Use RespProviderScriptList instead
	 */
	export abstract class RespProviderConfigurationTypeList extends Response {
		/**
		 * The list of requested {@link ProviderConfigurationType}s.
		 */
		providerConfigurationTypes: ProviderConfigurationType[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 * @deprecated Use RespProviderScriptListByCompany instead
	 */
	export class RespProviderConfigurationTypeListByCompany extends RespProviderConfigurationTypeList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}