

	/**
	 * A container for the {@link company} object.
	 */
	export abstract class ReqCompany extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link Company}.
		 */
		company: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.company?.id.toString() ?? "";
	}