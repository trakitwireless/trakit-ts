

	/**
	 * A container for the {@link providerRegistration} object.
	 */
	export abstract class ReqProviderRegistration extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link ProviderRegistration}.
		 */
		providerRegistration: ParamCode;

		/**
		 *  
		 */
public string GetKey() => this.providerRegistration?.code.toString() ?? "";
	}