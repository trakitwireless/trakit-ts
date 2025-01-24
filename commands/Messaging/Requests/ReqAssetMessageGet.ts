

	/**
	 * Gets details of the specified <see cref="AssetMessage"/>.
	 */
	export class ReqAssetMessageGet extends ReqAssetMessage implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="AssetMessage"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}