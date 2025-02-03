

	/**
	 * A container for the {@link dispatchJob} object.
	 */
	export abstract class ReqDispatchJob extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link DispatchJob}.
		 */
		dispatchJob: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.dispatchJob?.id.toString() ?? "";
	}