

	/**
	 * For delete/restore commands, this contains the <see cref="Asset.id"/>, owning <see cref="Company.id"/>, and deleted state.
	 */
	export class RespAssetDelete extends Response {
		/**
		 *  
		 */
		public asset: RespIdDeleted;
	}