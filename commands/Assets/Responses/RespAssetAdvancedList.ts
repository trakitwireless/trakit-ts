

	/**
	 * A container for the requested {@link assetAdvanceds}.
	 */
	export abstract class RespAssetAdvancedList extends Response {
		/**
		 * The list of requested {@link AssetAdvanced}s.
		 */
		assetAdvanceds: AssetAdvanced[] = [];
	}

	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespAssetAdvancedListByCompany extends RespAssetAdvancedList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}
	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespAssetAdvancedListByCompanyAndLabels extends RespAssetAdvancedListByCompany {
		/**
		 * The labels given as input.
		 * {@link AssetGeneral.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespAssetAdvancedListByCompanyAndRefPairs extends RespAssetAdvancedListByCompany {
		/**
		 * The reference string given as input.
		 * {@link AssetGeneral.references}
		 */
		references: Map<string, string>;
	}