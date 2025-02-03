

	/**
	 * A container for the requested {@link providerConfigs}.
	 */
	export abstract class RespProviderConfigList extends Response {
		/**
		 * The list of requested {@link ProviderConfig}s.
		 */
		providerConfigs: ProviderConfig[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespProviderConfigListByCompany extends RespProviderConfigList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}