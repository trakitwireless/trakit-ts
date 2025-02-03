

	/**
	 * A container for the requested {@link providerControls}.
	 */
	export abstract class RespProviderControlList extends Response {
		/**
		 * The list of requested {@link ProviderControl}s.
		 */
		providerControls: ProviderControl[] = [];
	}

	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespProviderControlListByCompany extends RespProviderControlList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}
	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespProviderControlListByConfig: RespProviderControlList {
		/**
		 * Identifier of the {@link ProviderConfig} (or {@link ProviderConfiguration}) to which this collection belongs.
		 */
		config: RespId;
	}