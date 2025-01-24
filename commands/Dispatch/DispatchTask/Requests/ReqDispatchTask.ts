

	/**
	 * A container for the <see cref="dispatchTask"/> object.
	 */
	export abstract class ReqDispatchTask extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="DispatchTask"/>.
		 */
		dispatchTask: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.dispatchTask?.id.toString() ?? "";
	}