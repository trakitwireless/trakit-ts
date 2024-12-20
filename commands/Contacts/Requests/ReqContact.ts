

	/// <summary>
	/// A container for the <see cref="contact"/> object.
	/// </summary>
	export abstract class ReqContact extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="Contact"/>.
		/// </summary>
		public contact: ParamId;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.contact?.id.toString() ?? "";
	}