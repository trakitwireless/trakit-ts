

	/**
	 * A container for the {@link provider} object.
	 */
	export abstract class ReqProvider extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link Provider}.
		 */
		provider: ParamIdentifier;

		/**
		 *  
		 */
public string GetKey() => this.provider?.id ?? "";
	}