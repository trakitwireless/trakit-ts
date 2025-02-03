

	/**
	 * A container for the requested {@link providerGenerals}.
	 */
	export abstract class RespProviderGeneralList extends Response {
		/**
		 * The list of requested {@link ProviderGeneral}s.
		 */
		providerGenerals: ProviderGeneral[] = [];
	}

	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespProviderGeneralListByCompany extends RespProviderGeneralList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}
	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespProviderGeneralListByConfig extends RespProviderGeneralList {
		/**
		 * Identifier of the {@link ProviderConfig} (or {@link ProviderConfiguration}) to which this collection belongs.
		 */
		config: RespId;
	}