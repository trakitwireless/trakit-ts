

	/**
	 * A container for the {@link providerScript} object.
	 */
	export abstract class ReqProviderScript extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link ProviderScript}.
		 */
		providerScript: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.providerScript?.id.toString() ?? "";
	}