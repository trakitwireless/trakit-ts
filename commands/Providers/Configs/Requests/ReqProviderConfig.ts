

	/**
	 * A container for the <see cref="providerConfig"/> object.
	 */
	export abstract class ReqProviderConfig extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="ProviderConfig"/>.
		 */
		public providerConfig: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.providerConfig?.id.toString() ?? "";
	}