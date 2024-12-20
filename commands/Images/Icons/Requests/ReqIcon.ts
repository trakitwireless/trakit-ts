

	/// <summary>
	/// A container for the <see cref="icon"/> object.
	/// </summary>
	export abstract class ReqIcon extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="Icon"/>.
		/// </summary>
		public icon: ParamId;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.icon?.id.toString() ?? "";
	}