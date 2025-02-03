

	/**
	 * Creates a new or updates an existing {@link DispatchJob}.
	 */
	export class ReqDispatchJobMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link DispatchJob}.
		 */
		dispatchJob: ParamDispatchJobMerge;

		/**
		 *  
		 */
public string GetKey() => this.dispatchJob?.id?.toString() ?? "";
	}