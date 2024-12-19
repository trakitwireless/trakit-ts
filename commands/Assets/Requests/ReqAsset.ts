

	/// <summary>
	/// A container for the <see cref="asset"/> object.
	/// </summary>
	export abstract class ReqAsset extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="Asset"/>.
		/// </summary>
		public asset: ParamId;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.asset?.id.toString() ?? "";
	}