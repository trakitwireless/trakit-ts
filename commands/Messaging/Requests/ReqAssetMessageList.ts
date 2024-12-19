

	/// <summary>
	/// Gets details of the specified <see cref="assetMessage"/>.
	/// </summary>
	export abstract class ReqAssetMessageList extends Request implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return  deleted <see cref="AssetMessage"/>s.
		/// </summary>
		public includeDeleted: boolean = false;
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class ReqAssetMessageListByCompany extends ReqAssetMessageList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}
	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class ReqAssetMessageListByAsset extends ReqAssetMessageList implements IReqListByAsset {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public asset: ParamId;
	}