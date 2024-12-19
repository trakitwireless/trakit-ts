

	/// <summary>
	/// Creates a new or updates an existing <see cref="Behaviour"/>.
	/// </summary>
	export class ReqBehaviourMerge extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="Behaviour"/>.
		/// </summary>
		public behaviour: ParamBehaviourMerge;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.behaviour?.id?.toString() ?? "";
	}