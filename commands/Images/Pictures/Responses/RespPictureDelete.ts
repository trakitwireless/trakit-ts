

	/// <summary>
	/// A container for the <see cref="picture"/>.
	/// </summary>
	export class RespPictureDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="Picture"/>.
		/// </summary>
		public picture: RespIdDeleted;
	}