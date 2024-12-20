


	/// <summary>
	/// A container for the <see cref="place"/>.
	/// </summary>
	export class RespPlaceBatchDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="Place"/>.
		/// </summary>
		public places: RespIdDeleted[] = [];
	}