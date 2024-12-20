

	/// <summary>
	/// Cancels a <see cref="DispatchJob"/>, removing it from the dispatcher's and driver's views.
	/// </summary>
	export class ReqDispatchJobCancel extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to cancel a <see cref="DispatchJob"/>.
		/// </summary>
		public dispatchJob: ParamDispatchJobCancel;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.dispatchJob.id.toString() ?? "";
	}