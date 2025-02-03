

	/**
	 * Gets details of the specified {@link AssetMessage}.
	 */
	export class ReqAssetMessageGet extends ReqAssetMessage implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link AssetMessage} (if it exists).
		 */
		includeDeleted: boolean = false;
	}