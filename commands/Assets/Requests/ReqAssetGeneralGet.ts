

	/**
	 * Gets details of the specified {@link AssetGeneral}.
	 */
	export class ReqAssetGeneralGet extends ReqAsset implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link AssetGeneral} (if it exists).
		 */
		includeDeleted: boolean = false;
		/**
		 * When true, the command will also return {@link AssetGeneralMessage}s for the asset.
		 */
		includeMessages: boolean = false;
		/**
		 * When true, the command will also return {@link DispatchTask}s for the asset.
		 */
		includeTasks: boolean = false;
	}