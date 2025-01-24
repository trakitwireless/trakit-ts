﻿

	/**
	 * Gets details of the specified <see cref="AssetGeneral"/>.
	 */
	export class ReqAssetGeneralGet extends ReqAsset implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="AssetGeneral"/> (if it exists).
		 */
		public includeDeleted: boolean = false;
		/**
		 * When true, the command will also return <see cref="AssetGeneralMessage"/>s for the asset.
		 */
		public includeMessages: boolean = false;
		/**
		 * When true, the command will also return <see cref="DispatchTask"/>s for the asset.
		 */
		public includeTasks: boolean = false;
	}