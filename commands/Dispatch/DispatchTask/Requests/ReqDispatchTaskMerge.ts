

	/// <summary>
	/// Creates a new or updates an existing <see cref="DispatchTask"/>.
	/// </summary>
	export class ReqDispatchTaskMerge extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="DispatchTask"/>.
		/// </summary>
		public dispatchTask: ParamDispatchTaskMerge;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.dispatchTask?.id?.toString() ?? "";
	}