

	/**
	 * A container for the {@link providerConfig} object.
	 */
	export abstract class ReqProviderConfig extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link ProviderConfig}.
		 */
		providerConfig: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.providerConfig?.id.toString() ?? "";
	}