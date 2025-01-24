

	/**
	 * A container for the <see cref="asset"/> object.
	 */
	export abstract class ReqAsset extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="Asset"/>.
		 */
		asset: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.asset?.id.toString() ?? "";
	}