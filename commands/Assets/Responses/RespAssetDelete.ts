

	/// <summary>
	/// For delete/restore commands, this contains the <see cref="Asset.id"/>, owning <see cref="Company.id"/>, and deleted state.
	/// </summary>
	export class RespAssetDelete extends Response {
		/// <summary>
		/// 
		/// </summary>
		public asset: RespIdDeleted;
	}