

	/**
	 * Gets details of the specified <see cref="AssetAdvanced"/>.
	 */
	export class ReqAssetAdvancedGet extends ReqAsset implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="AssetAdvanced"/> (if it exists).
		 */
		public includeDeleted: boolean = false;
	}