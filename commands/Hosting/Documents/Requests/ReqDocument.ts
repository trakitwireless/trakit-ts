

	/**
	 * A container for the {@link document} object.
	 */
	export abstract class ReqDocument extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link Document}.
		 */
		document: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.document?.id.toString() ?? "";
	}