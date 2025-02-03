

	/**
	 * Gets details of the specified {@link assetMessage}.
	 */
	export abstract class ReqAssetMessageList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link AssetMessage}s.
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqAssetMessageListByCompany extends ReqAssetMessageList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqAssetMessageListByAsset extends ReqAssetMessageList implements IReqListByAsset {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		asset: ParamId;
	}