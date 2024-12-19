

	/// <summary>
	/// Creates a new or updates an existing <see cref="DispatchJob"/>.
	/// </summary>
	export class ReqDispatchJobMerge extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="DispatchJob"/>.
		/// </summary>
		public dispatchJob: ParamDispatchJobMerge;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.dispatchJob?.id?.toString() ?? "";
	}