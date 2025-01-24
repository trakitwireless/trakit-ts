

	/**
	 * A container for the <see cref="assetMessage"/>.
	 */
	export class RespAssetMessageDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="AssetMessage"/>.
		 */
		public assetMessage: RespIdDeleted;
	}