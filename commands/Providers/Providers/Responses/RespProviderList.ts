

	/**
	 * A container for the requested <see cref="providers"/>.
	 */
	export abstract class RespProviderList extends Response {
		/**
		 * The list of requested <see cref="Provider"/>s.
		 */
		public providers: Provider[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespProviderListByCompany extends RespProviderList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: RespId;
	}
	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespProviderListByConfig extends RespProviderList {
		/**
		 * Identifier of the <see cref="ProviderConfig"/> (or <see cref="ProviderConfiguration"/>) to which this collection belongs.
		 */
		public config: RespId;
	}