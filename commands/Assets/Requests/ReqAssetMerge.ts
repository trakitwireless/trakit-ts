

	/**
	 * Container for the command to creates a new, or updates an existing <see cref="Asset"/>.
	 */
	export class ReqAssetMerge extends Request {
		/**
		 * Parameters given to create or update an <see cref="Asset"/>.
		 */
		asset: ParamAssetMerge;
	}