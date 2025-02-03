

	/**
	 * A container for the {@link contact} object.
	 */
	export abstract class ReqContact extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link Contact}.
		 */
		contact: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.contact?.id.toString() ?? "";
	}