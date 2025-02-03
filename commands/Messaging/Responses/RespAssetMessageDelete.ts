

	/**
	 * A container for the {@link assetMessage}.
	 */
	export class RespAssetMessageDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link AssetMessage}.
		 */
		assetMessage: RespIdDeleted;
	}