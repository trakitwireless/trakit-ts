

	/**
	 * A container for the requested {@link providers}.
	 */
	export abstract class RespProviderList extends Response {
		/**
		 * The list of requested {@link Provider}s.
		 */
		providers: Provider[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespProviderListByCompany extends RespProviderList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}
	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespProviderListByConfig extends RespProviderList {
		/**
		 * Identifier of the {@link ProviderConfig} (or {@link ProviderConfiguration}) to which this collection belongs.
		 */
		config: RespId;
	}