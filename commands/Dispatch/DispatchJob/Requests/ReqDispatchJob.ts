

	/// <summary>
	/// A container for the <see cref="dispatchJob"/> object.
	/// </summary>
	export abstract class ReqDispatchJob extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="DispatchJob"/>.
		/// </summary>
		public dispatchJob: ParamId;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.dispatchJob?.id.toString() ?? "";
	}