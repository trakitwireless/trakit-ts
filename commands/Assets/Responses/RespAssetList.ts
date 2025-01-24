

	/**
	 * A container for the requested <see cref="assets"/>.
	 */
	export abstract class RespAssetList extends Response {
		/**
		 * The list of requested <see cref="Asset"/>s.
		 */
		assets: Asset[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespAssetListByCompany extends RespAssetList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: RespId;
	}
	/**
	 * Contains the codified <see cref="Company.labels"/> keys used to filter the collection.
	 */
	export class RespAssetListByCompanyAndLabels extends RespAssetListByCompany {
		/**
		 * The parsed labels given as input.
		 * {@link AssetGeneral.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * Contains the <see cref="AssetGeneral.references"/> used to filter the collection.
	 */
	export class RespAssetListByCompanyAndRefPairs extends RespAssetListByCompany {
		/**
		 * The parsed references given as input.
		 * {@link AssetGeneral.references}
		 */
		references: Map<string, string>;
	}