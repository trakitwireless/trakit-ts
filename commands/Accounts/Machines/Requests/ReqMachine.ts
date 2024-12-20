

	/// <summary>
	/// A container for the <see cref="machine"/> object.
	/// </summary>
	export abstract class ReqMachine extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="Machine"/>.
		/// </summary>
		public machine: ParamKey;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.machine?.key ?? "";
	}