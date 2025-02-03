

	/**
	 * A container for the {@link asset} object.
	 */
	export abstract class ReqAsset extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link Asset}.
		 */
		asset: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.asset?.id.toString() ?? "";
	}