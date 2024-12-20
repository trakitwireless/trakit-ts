

	/// <summary>
	/// A container for the <see cref="dispatchTask"/> object.
	/// </summary>
	export abstract class ReqDispatchTask extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="DispatchTask"/>.
		/// </summary>
		public dispatchTask: ParamId;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.dispatchTask?.id.toString() ?? "";
	}