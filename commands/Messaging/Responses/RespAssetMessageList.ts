

	/// <summary>
	/// A container for the requested <see cref="assetMessages"/>.
	/// </summary>
	export abstract class RespAssetMessageList extends Response {
		/// <summary>
		/// The list of requested <see cref="AssetMessage"/>s.
		/// </summary>
		public assetMessages: AssetMessage[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespAssetMessageListByCompany extends RespAssetMessageList implements IRespListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}
	/// <summary>
	/// Contains the <see cref="Asset.id"/> of the collection.
	/// </summary>
	export class RespAssetMessageListByAsset extends RespAssetMessageList implements IRespListByAsset {
		/// <summary>
		/// Identifier of the <see cref="Asset"/> to which this collection belongs.
		/// </summary>
		public asset: RespId;
	}