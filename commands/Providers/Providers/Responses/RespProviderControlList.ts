

	/**
	 * A container for the requested <see cref="providerControls"/>.
	 */
	export abstract class RespProviderControlList extends Response {
		/**
		 * The list of requested <see cref="ProviderControl"/>s.
		 */
		providerControls: ProviderControl[] = [];
	}

	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespProviderControlListByCompany extends RespProviderControlList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: RespId;
	}
	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespProviderControlListByConfig: RespProviderControlList {
		/**
		 * Identifier of the <see cref="ProviderConfig"/> (or <see cref="ProviderConfiguration"/>) to which this collection belongs.
		 */
		config: RespId;
	}