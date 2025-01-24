

	/**
	 * A container for the requested <see cref="providerGenerals"/>.
	 */
	export abstract class RespProviderGeneralList extends Response {
		/**
		 * The list of requested <see cref="ProviderGeneral"/>s.
		 */
		public providerGenerals: ProviderGeneral[] = [];
	}

	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespProviderGeneralListByCompany extends RespProviderGeneralList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: RespId;
	}
	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespProviderGeneralListByConfig extends RespProviderGeneralList {
		/**
		 * Identifier of the <see cref="ProviderConfig"/> (or <see cref="ProviderConfiguration"/>) to which this collection belongs.
		 */
		public config: RespId;
	}