

	/**
	 * A container for the requested {@link assets}.
	 */
	export abstract class RespAssetList extends Response {
		/**
		 * The list of requested {@link Asset}s.
		 */
		assets: Asset[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespAssetListByCompany extends RespAssetList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}
	/**
	 * Contains the codified {@link Company.labels} keys used to filter the collection.
	 */
	export class RespAssetListByCompanyAndLabels extends RespAssetListByCompany {
		/**
		 * The parsed labels given as input.
		 * {@link AssetGeneral.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * Contains the {@link AssetGeneral.references} used to filter the collection.
	 */
	export class RespAssetListByCompanyAndRefPairs extends RespAssetListByCompany {
		/**
		 * The parsed references given as input.
		 * {@link AssetGeneral.references}
		 */
		references: Map<string, string>;
	}