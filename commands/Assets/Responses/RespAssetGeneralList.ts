

	/**
	 * A container for the requested <see cref="assetGenerals"/>.
	 */
	export abstract class RespAssetGeneralList extends Response {
		/**
		 * The list of requested <see cref="AssetGeneral"/>s.
		 */
		public assetGenerals: AssetGeneral[] = [];
	}

	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespAssetGeneralListByCompany extends RespAssetGeneralList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: RespId;
	}
	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespAssetGeneralListByCompanyAndLabels extends RespAssetGeneralListByCompany {
		/**
		 * The labels given as input.
		 * {@link AssetGeneral.labels}
		 */
		public labels: string[] = [];
	}
	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespAssetGeneralListByCompanyAndRefPairs extends RespAssetGeneralListByCompany {
		/**
		 * The reference string given as input.
		 * {@link AssetGeneral.references}
		 */
		public references: Map<string, string>;
	}