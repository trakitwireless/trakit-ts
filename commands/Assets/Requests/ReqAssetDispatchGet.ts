

	/**
	 * Gets details of the specified <see cref="AssetDispatch"/>.
	 */
	export class ReqAssetDispatchGet extends ReqAsset implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="AssetDispatch"/> (if it exists).
		 */
		public includeDeleted: boolean = false;
		/**
		 * When true, the command will also return <see cref="AssetDispatchMessage"/>s for the asset.
		 */
		public includeMessages: boolean = false;
		/**
		 * When true, the command will also return <see cref="DispatchTask"/>s for the asset.
		 */
		public includeTasks: boolean = false;
	}