

	/// <summary>
	/// Creates a new or updates an existing <see cref="BehaviourScript"/>.
	/// </summary>
	export class ReqBehaviourScriptMerge extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="BehaviourScript"/>.
		/// </summary>
		public behaviourScript: ParamBehaviourScriptMerge;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.behaviourScript?.id?.toString() ?? "";
	}