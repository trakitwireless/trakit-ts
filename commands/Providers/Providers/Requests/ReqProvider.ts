

	/**
	 * A container for the <see cref="provider"/> object.
	 */
	export abstract class ReqProvider extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="Provider"/>.
		 */
		provider: ParamIdentifier;

		/**
		 *  
		 */
public string GetKey() => this.provider?.id ?? "";
	}