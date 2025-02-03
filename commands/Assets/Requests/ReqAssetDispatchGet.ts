

	/**
	 * Gets details of the specified {@link AssetDispatch}.
	 */
	export class ReqAssetDispatchGet extends ReqAsset implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link AssetDispatch} (if it exists).
		 */
		includeDeleted: boolean = false;
		/**
		 * When true, the command will also return {@link AssetDispatchMessage}s for the asset.
		 */
		includeMessages: boolean = false;
		/**
		 * When true, the command will also return {@link DispatchTask}s for the asset.
		 */
		includeTasks: boolean = false;
	}