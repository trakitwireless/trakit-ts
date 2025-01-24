

	/**
	 * A container for the <see cref="document"/> object.
	 */
	export abstract class ReqDocument extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="Document"/>.
		 */
		public document: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.document?.id.toString() ?? "";
	}