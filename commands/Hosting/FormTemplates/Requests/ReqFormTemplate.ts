


	/**
	 * A container for the <see cref="formTemplate"/> object.
	 */
	export abstract class ReqFormTemplate extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="FormTemplate"/>.
		 */
		public formTemplate: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.formTemplate?.id.toString() ?? "";
	}