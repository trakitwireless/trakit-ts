

	/**
	 * A container for the requested {@link providerAdvanceds}.
	 */
	export abstract class RespProviderAdvancedList extends Response {
		/**
		 * The list of requested {@link ProviderAdvanced}s.
		 */
		providerAdvanceds: ProviderAdvanced[] = [];
	}

	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespProviderAdvancedListByCompany extends RespProviderAdvancedList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}
	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespProviderAdvancedListByConfig: RespProviderAdvancedList {
		/**
		 * Identifier of the {@link ProviderConfig} (or {@link ProviderConfiguration}) to which this collection belongs.
		 */
		config: RespId;
	}