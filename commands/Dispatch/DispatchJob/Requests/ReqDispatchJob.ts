

	/**
	 * A container for the <see cref="dispatchJob"/> object.
	 */
	export abstract class ReqDispatchJob extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="DispatchJob"/>.
		 */
		dispatchJob: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.dispatchJob?.id.toString() ?? "";
	}