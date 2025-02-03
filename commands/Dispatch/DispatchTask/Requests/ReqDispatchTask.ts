

	/**
	 * A container for the {@link dispatchTask} object.
	 */
	export abstract class ReqDispatchTask extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link DispatchTask}.
		 */
		dispatchTask: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.dispatchTask?.id.toString() ?? "";
	}