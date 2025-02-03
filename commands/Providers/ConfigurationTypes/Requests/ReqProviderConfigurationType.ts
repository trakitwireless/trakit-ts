

	/**
	 * A container for the {@link providerConfigurationType} object.
	 * @deprecated Use ReqProviderScript instead
	 */
	export abstract class ReqProviderConfigurationType extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link ProviderConfigurationType}.
		 */
		providerConfigurationType: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.providerConfigurationType?.id.toString() ?? "";
	}