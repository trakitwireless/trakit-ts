

	/**
	 * Gets details of the specified <see cref="Asset"/>.
	 */
	export class ReqAssetGet extends ReqAsset implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="Asset"/> (if it exists).
		 */
		includeDeleted: boolean = false;
		/**
		 * When true, the command will also return <see cref="AssetMessage"/>s for the asset.
		 */
		includeMessages: boolean = false;
		/**
		 * When true, the command will also return <see cref="DispatchTask"/>s for the asset.
		 */
		includeTasks: boolean = false;
	}