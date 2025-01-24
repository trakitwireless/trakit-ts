

	/**
	 * A container for the <see cref="providerScript"/> object.
	 */
	export abstract class ReqProviderScript extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="ProviderScript"/>.
		 */
		providerScript: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.providerScript?.id.toString() ?? "";
	}