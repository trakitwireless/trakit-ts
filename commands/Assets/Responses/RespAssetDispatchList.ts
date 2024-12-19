

	/// <summary>
	/// A container for the requested <see cref="assetDispatches"/>.
	/// </summary>
	export abstract class RespAssetDispatchList extends Response {
		/// <summary>
		/// The list of requested <see cref="AssetDispatch"/>es.
		/// </summary>
		public assetDispatches: AssetDispatch[] = [];
	}

	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespAssetDispatchListByCompany extends RespAssetDispatchList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}
	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespAssetDispatchListByCompanyAndLabels extends RespAssetDispatchListByCompany {
		/// <summary>
		/// The labels given as input.
		/// </summary>
		/// <seealso cref="AssetGeneral.labels"/>
		public labels: string[] = [];
	}
	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespAssetDispatchListByCompanyAndRefPairs extends RespAssetDispatchListByCompany {
		/// <summary>
		/// The reference string given as input.
		/// </summary>
		/// <seealso cref="AssetGeneral.references"/>
		public references: Map<string, string>;
	}