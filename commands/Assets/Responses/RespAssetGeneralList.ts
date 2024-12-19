

	/// <summary>
	/// A container for the requested <see cref="assetGenerals"/>.
	/// </summary>
	export abstract class RespAssetGeneralList extends Response {
		/// <summary>
		/// The list of requested <see cref="AssetGeneral"/>s.
		/// </summary>
		public assetGenerals: AssetGeneral[] = [];
	}

	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespAssetGeneralListByCompany extends RespAssetGeneralList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}
	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespAssetGeneralListByCompanyAndLabels extends RespAssetGeneralListByCompany {
		/// <summary>
		/// The labels given as input.
		/// </summary>
		/// <seealso cref="AssetGeneral.labels"/>
		public labels: string[] = [];
	}
	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespAssetGeneralListByCompanyAndRefPairs extends RespAssetGeneralListByCompany {
		/// <summary>
		/// The reference string given as input.
		/// </summary>
		/// <seealso cref="AssetGeneral.references"/>
		public references: Map<string, string>;
	}