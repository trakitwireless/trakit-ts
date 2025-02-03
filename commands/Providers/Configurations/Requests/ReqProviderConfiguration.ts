

	/**
	 * A container for the {@link providerConfiguration} object.
	 * @deprecated Use ReqProviderConfig instead
	 */
	export abstract class ReqProviderConfiguration extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link ProviderConfiguration}.
		 */
		providerConfiguration: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.providerConfiguration?.id.toString() ?? "";
	}