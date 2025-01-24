

	/**
	 * A container for the <see cref="providerConfigurationType"/> object.
	 * @deprecated Use ReqProviderScript instead
	 */
	export abstract class ReqProviderConfigurationType extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="ProviderConfigurationType"/>.
		 */
		public providerConfigurationType: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.providerConfigurationType?.id.toString() ?? "";
	}