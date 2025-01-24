

	/**
	 * Gets details of the specified <see cref="assetMessage"/>.
	 */
	export abstract class ReqAssetMessageList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="AssetMessage"/>s.
		 */
		public includeDeleted: boolean = false;
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class ReqAssetMessageListByCompany extends ReqAssetMessageList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: ParamId;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class ReqAssetMessageListByAsset extends ReqAssetMessageList implements IReqListByAsset {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public asset: ParamId;
	}