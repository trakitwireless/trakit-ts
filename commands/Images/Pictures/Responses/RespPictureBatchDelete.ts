

	/// <summary>
	/// A container for the <see cref="picture"/>.
	/// </summary>
	export class RespPictureBatchDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="Picture"/>.
		/// </summary>
		public pictures: RespIdDeleted[] = [];
	}