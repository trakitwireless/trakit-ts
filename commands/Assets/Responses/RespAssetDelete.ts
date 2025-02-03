

	/**
	 * For delete/restore commands, this contains the {@link Asset.id}, owning {@link Company.id}, and deleted state.
	 */
	export class RespAssetDelete extends Response {
		/**
		 *  
		 */
		asset: RespIdDeleted;
	}