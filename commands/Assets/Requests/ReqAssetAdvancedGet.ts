

	/**
	 * Gets details of the specified {@link AssetAdvanced}.
	 */
	export class ReqAssetAdvancedGet extends ReqAsset implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link AssetAdvanced} (if it exists).
		 */
		includeDeleted: boolean = false;
	}