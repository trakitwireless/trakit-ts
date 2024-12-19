

	/// <summary>
	/// A container for the <see cref="assetMessage"/>.
	/// </summary>
	export class RespAssetMessageDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="AssetMessage"/>.
		/// </summary>
		public assetMessage: RespIdDeleted;
	}