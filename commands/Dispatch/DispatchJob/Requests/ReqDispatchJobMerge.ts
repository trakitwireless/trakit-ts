

	/**
	 * Creates a new or updates an existing <see cref="DispatchJob"/>.
	 */
	export class ReqDispatchJobMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="DispatchJob"/>.
		 */
		public dispatchJob: ParamDispatchJobMerge;

		/**
		 *  
		 */
public string GetKey() => this.dispatchJob?.id?.toString() ?? "";
	}