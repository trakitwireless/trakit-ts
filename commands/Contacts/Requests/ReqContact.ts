

	/**
	 * A container for the <see cref="contact"/> object.
	 */
	export abstract class ReqContact extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="Contact"/>.
		 */
		public contact: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.contact?.id.toString() ?? "";
	}