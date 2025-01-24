

	/**
	 * A container for the <see cref="providerRegistration"/> object.
	 */
	export abstract class ReqProviderRegistration extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="ProviderRegistration"/>.
		 */
		providerRegistration: ParamCode;

		/**
		 *  
		 */
public string GetKey() => this.providerRegistration?.code.toString() ?? "";
	}