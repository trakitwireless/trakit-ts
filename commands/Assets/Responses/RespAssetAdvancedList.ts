

	/// <summary>
	/// A container for the requested <see cref="assetAdvanceds"/>.
	/// </summary>
	export abstract class RespAssetAdvancedList extends Response {
		/// <summary>
		/// The list of requested <see cref="AssetAdvanced"/>s.
		/// </summary>
		public assetAdvanceds: AssetAdvanced[] = [];
	}

	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespAssetAdvancedListByCompany extends RespAssetAdvancedList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}
	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespAssetAdvancedListByCompanyAndLabels extends RespAssetAdvancedListByCompany {
		/// <summary>
		/// The labels given as input.
		/// </summary>
		/// <seealso cref="AssetGeneral.labels"/>
		public labels: string[] = [];
	}
	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespAssetAdvancedListByCompanyAndRefPairs extends RespAssetAdvancedListByCompany {
		/// <summary>
		/// The reference string given as input.
		/// </summary>
		/// <seealso cref="AssetGeneral.references"/>
		public references: Map<string, string>;
	}