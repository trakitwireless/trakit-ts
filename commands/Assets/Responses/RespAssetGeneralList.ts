

	/**
	 * A container for the requested {@link assetGenerals}.
	 */
	export abstract class RespAssetGeneralList extends Response {
		/**
		 * The list of requested {@link AssetGeneral}s.
		 */
		assetGenerals: AssetGeneral[] = [];
	}

	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespAssetGeneralListByCompany extends RespAssetGeneralList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}
	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespAssetGeneralListByCompanyAndLabels extends RespAssetGeneralListByCompany {
		/**
		 * The labels given as input.
		 * {@link AssetGeneral.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespAssetGeneralListByCompanyAndRefPairs extends RespAssetGeneralListByCompany {
		/**
		 * The reference string given as input.
		 * {@link AssetGeneral.references}
		 */
		references: Map<string, string>;
	}