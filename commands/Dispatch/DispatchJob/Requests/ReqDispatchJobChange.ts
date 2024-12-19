

	/// <summary>
	/// Completes or modifies an existing <see cref="DispatchJob"/> from a driver's perspective.
	/// This can be used by dispatchers to accomodate thrid-party delivery systems, or correcting errors from drivers.
	/// </summary>
	export class ReqDispatchJobChange extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="DispatchJob"/>.
		/// </summary>
		public dispatchJob: ParamDispatchJobChange;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.dispatchJob?.id.toString() ?? "";
	}