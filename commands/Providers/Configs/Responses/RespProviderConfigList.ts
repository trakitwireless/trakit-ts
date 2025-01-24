

	/**
	 * A container for the requested <see cref="providerConfigs"/>.
	 */
	export abstract class RespProviderConfigList extends Response {
		/**
		 * The list of requested <see cref="ProviderConfig"/>s.
		 */
		public providerConfigs: ProviderConfig[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespProviderConfigListByCompany extends RespProviderConfigList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: RespId;
	}