
	/// <summary>
	/// A container for the <see cref="assetMessage"/>.
	/// </summary>
	export class RespAssetMessageMerge extends Response {
		/// <summary>
		/// An object which contains the <c>id</c> and <c>company</c> keys when there is no error.
		/// </summary>
		public assetMessage: RespIdCompany;
	}