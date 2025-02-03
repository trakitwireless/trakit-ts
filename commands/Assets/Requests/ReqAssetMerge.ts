

	/**
	 * Container for the command to creates a new, or updates an existing {@link Asset}.
	 */
	export class ReqAssetMerge extends Request {
		/**
		 * Parameters given to create or update an {@link Asset}.
		 */
		asset: ParamAssetMerge;
	}