

	/**
	 * A container for the <see cref="company"/> object.
	 */
	export abstract class ReqCompany extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="Company"/>.
		 */
		public company: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.company?.id.toString() ?? "";
	}