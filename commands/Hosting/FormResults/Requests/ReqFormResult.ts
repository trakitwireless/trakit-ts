


	/// <summary>
	/// A container for the <see cref="formResult"/> object.
	/// </summary>
	export abstract class ReqFormResult extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="FormResult"/>.
		/// </summary>
		public formResult: ParamId;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.formResult?.id.toString() ?? "";
	}