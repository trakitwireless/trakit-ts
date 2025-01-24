

	/**
	 * A container for the <see cref="providerConfiguration"/> object.
	 * @deprecated Use ReqProviderConfig instead
	 */
	export abstract class ReqProviderConfiguration extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="ProviderConfiguration"/>.
		 */
		public providerConfiguration: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.providerConfiguration?.id.toString() ?? "";
	}