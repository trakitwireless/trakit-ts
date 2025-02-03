

	/**
	 * A container for the {@link assetMessage}.
	 */
	export class RespAssetMessageBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link AssetMessage}.
		 */
		assetMessages: RespIdDeleted[] = [];
	}