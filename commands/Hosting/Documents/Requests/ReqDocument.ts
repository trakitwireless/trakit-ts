

	/// <summary>
	/// A container for the <see cref="document"/> object.
	/// </summary>
	export abstract class ReqDocument extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="Document"/>.
		/// </summary>
		public document: ParamId;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.document?.id.toString() ?? "";
	}