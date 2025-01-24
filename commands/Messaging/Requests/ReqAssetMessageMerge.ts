

	/**
	 * Creates a new or updates an existing <see cref="AssetMessage"/>.
	 */
	export class ReqAssetMessageMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="AssetMessage"/>.
		 */
		assetMessage: ParamAssetMessageMerge;

		/**
		 *  
		 */
public string GetKey() => this.assetMessage?.id?.toString() ?? "";
	}