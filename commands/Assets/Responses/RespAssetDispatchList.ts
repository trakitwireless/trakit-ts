

	/**
	 * A container for the requested <see cref="assetDispatches"/>.
	 */
	export abstract class RespAssetDispatchList extends Response {
		/**
		 * The list of requested <see cref="AssetDispatch"/>es.
		 */
		assetDispatches: AssetDispatch[] = [];
	}

	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespAssetDispatchListByCompany extends RespAssetDispatchList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: RespId;
	}
	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespAssetDispatchListByCompanyAndLabels extends RespAssetDispatchListByCompany {
		/**
		 * The labels given as input.
		 * {@link AssetGeneral.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespAssetDispatchListByCompanyAndRefPairs extends RespAssetDispatchListByCompany {
		/**
		 * The reference string given as input.
		 * {@link AssetGeneral.references}
		 */
		references: Map<string, string>;
	}