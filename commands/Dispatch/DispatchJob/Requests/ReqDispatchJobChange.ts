

	/**
	 * Completes or modifies an existing <see cref="DispatchJob"/> from a driver's perspective.
	 * This can be used by dispatchers to accomodate thrid-party delivery systems, or correcting errors from drivers.
	 */
	export class ReqDispatchJobChange extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="DispatchJob"/>.
		 */
		public dispatchJob: ParamDispatchJobChange;

		/**
		 *  
		 */
public string GetKey() => this.dispatchJob?.id.toString() ?? "";
	}