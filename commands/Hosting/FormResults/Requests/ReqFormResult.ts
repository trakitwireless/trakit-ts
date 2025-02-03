


	/**
	 * A container for the {@link formResult} object.
	 */
	export abstract class ReqFormResult extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link FormResult}.
		 */
		formResult: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.formResult?.id.toString() ?? "";
	}