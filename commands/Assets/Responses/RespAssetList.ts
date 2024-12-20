

	/// <summary>
	/// A container for the requested <see cref="assets"/>.
	/// </summary>
	export abstract class RespAssetList extends Response {
		/// <summary>
		/// The list of requested <see cref="Asset"/>s.
		/// </summary>
		public assets: Asset[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespAssetListByCompany extends RespAssetList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}
	/// <summary>
	/// Contains the codified <see cref="Company.labels"/> keys used to filter the collection.
	/// </summary>
	export class RespAssetListByCompanyAndLabels extends RespAssetListByCompany {
		/// <summary>
		/// The parsed labels given as input.
		/// </summary>
		/// <seealso cref="AssetGeneral.labels"/>
		public labels: string[] = [];
	}
	/// <summary>
	/// Contains the <see cref="AssetGeneral.references"/> used to filter the collection.
	/// </summary>
	export class RespAssetListByCompanyAndRefPairs extends RespAssetListByCompany {
		/// <summary>
		/// The parsed references given as input.
		/// </summary>
		/// <seealso cref="AssetGeneral.references"/>
		public references: Map<string, string>;
	}