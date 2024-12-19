

	/// <summary>
	/// Creates a new or updates an existing <see cref="AssetMessage"/>.
	/// </summary>
	export class ReqAssetMessageMerge extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="AssetMessage"/>.
		/// </summary>
		public assetMessage: ParamAssetMessageMerge;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.assetMessage?.id?.toString() ?? "";
	}