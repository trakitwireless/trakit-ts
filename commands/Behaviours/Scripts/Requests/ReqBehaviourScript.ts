

	/// <summary>
	/// A container for the <see cref="behaviourScript"/> object.
	/// </summary>
	export abstract class ReqBehaviourScript extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="BehaviourScript"/>.
		/// </summary>
		public behaviourScript: ParamId;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.behaviourScript?.id.toString() ?? "";
	}