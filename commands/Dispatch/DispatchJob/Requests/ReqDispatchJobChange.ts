

	/**
	 * Completes or modifies an existing {@link DispatchJob} from a driver's perspective.
	 * This can be used by dispatchers to accomodate thrid-party delivery systems, or correcting errors from drivers.
	 */
	export class ReqDispatchJobChange extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link DispatchJob}.
		 */
		dispatchJob: ParamDispatchJobChange;

		/**
		 *  
		 */
public string GetKey() => this.dispatchJob?.id.toString() ?? "";
	}