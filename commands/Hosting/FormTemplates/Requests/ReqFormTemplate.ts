


	/**
	 * A container for the {@link formTemplate} object.
	 */
	export abstract class ReqFormTemplate extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link FormTemplate}.
		 */
		formTemplate: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.formTemplate?.id.toString() ?? "";
	}