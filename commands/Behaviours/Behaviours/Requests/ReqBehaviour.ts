

	/// <summary>
	/// A container for the <see cref="behaviour"/> object.
	/// </summary>
	export abstract class ReqBehaviour extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="Behaviour"/>.
		/// </summary>
		public behaviour: ParamId;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.behaviour?.id.toString() ?? "";
	}