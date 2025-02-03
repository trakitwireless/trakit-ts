

	/**
	 * A container for the {@link assetMessage} object.
	 */
	export abstract class ReqAssetMessage extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link AssetMessage}.
		 */
		assetMessage: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.assetMessage?.id.toString() ?? "";
	}