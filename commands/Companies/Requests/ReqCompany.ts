

	/// <summary>
	/// A container for the <see cref="company"/> object.
	/// </summary>
	export abstract class ReqCompany extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="Company"/>.
		/// </summary>
		public company: ParamId;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.company?.id.toString() ?? "";
	}