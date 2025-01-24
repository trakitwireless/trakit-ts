

	/**
	 * A container for the <see cref="assetMessage"/>.
	 */
	export class RespAssetMessageBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="AssetMessage"/>.
		 */
		assetMessages: RespIdDeleted[] = [];
	}