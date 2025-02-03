

	/**
	 * Cancels a {@link DispatchJob}, removing it from the dispatcher's and driver's views.
	 */
	export class ReqDispatchJobCancel extends Request implements IReqSingle {
		/**
		 * Parameters given to cancel a {@link DispatchJob}.
		 */
		dispatchJob: ParamDispatchJobCancel;

		/**
		 *  
		 */
public string GetKey() => this.dispatchJob.id.toString() ?? "";
	}