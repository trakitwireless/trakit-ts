

	/**
	 * Gets details of the specified {@link Asset}.
	 */
	export class ReqAssetGet extends ReqAsset implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link Asset} (if it exists).
		 */
		includeDeleted: boolean = false;
		/**
		 * When true, the command will also return {@link AssetMessage}s for the asset.
		 */
		includeMessages: boolean = false;
		/**
		 * When true, the command will also return {@link DispatchTask}s for the asset.
		 */
		includeTasks: boolean = false;
	}