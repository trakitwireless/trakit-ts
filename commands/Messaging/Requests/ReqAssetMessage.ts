

	/// <summary>
	/// A container for the <see cref="assetMessage"/> object.
	/// </summary>
	export abstract class ReqAssetMessage extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="AssetMessage"/>.
		/// </summary>
		public assetMessage: ParamId;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.assetMessage?.id.toString() ?? "";
	}