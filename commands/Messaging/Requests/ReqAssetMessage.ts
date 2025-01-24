

	/**
	 * A container for the <see cref="assetMessage"/> object.
	 */
	export abstract class ReqAssetMessage extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="AssetMessage"/>.
		 */
		public assetMessage: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.assetMessage?.id.toString() ?? "";
	}