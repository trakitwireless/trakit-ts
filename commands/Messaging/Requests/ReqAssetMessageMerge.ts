

	/**
	 * Creates a new or updates an existing {@link AssetMessage}.
	 */
	export class ReqAssetMessageMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link AssetMessage}.
		 */
		assetMessage: ParamAssetMessageMerge;

		/**
		 *  
		 */
public string GetKey() => this.assetMessage?.id?.toString() ?? "";
	}