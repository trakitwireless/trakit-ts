

	/**
	 * A container for the requested <see cref="providerAdvanceds"/>.
	 */
	export abstract class RespProviderAdvancedList extends Response {
		/**
		 * The list of requested <see cref="ProviderAdvanced"/>s.
		 */
		public providerAdvanceds: ProviderAdvanced[] = [];
	}

	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespProviderAdvancedListByCompany extends RespProviderAdvancedList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: RespId;
	}
	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespProviderAdvancedListByConfig: RespProviderAdvancedList {
		/**
		 * Identifier of the <see cref="ProviderConfig"/> (or <see cref="ProviderConfiguration"/>) to which this collection belongs.
		 */
		public config: RespId;
	}