


	/**
	 * A container for the <see cref="formResult"/> object.
	 */
	export abstract class ReqFormResult extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="FormResult"/>.
		 */
		public formResult: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.formResult?.id.toString() ?? "";
	}