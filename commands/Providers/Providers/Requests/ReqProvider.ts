

	/// <summary>
	/// A container for the <see cref="provider"/> object.
	/// </summary>
	export abstract class ReqProvider extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="Provider"/>.
		/// </summary>
		public provider: ParamIdentifier;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.provider?.id ?? "";
	}