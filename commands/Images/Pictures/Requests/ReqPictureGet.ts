

	/// <summary>
	/// Gets details of the specified <see cref="Picture"/>.
	/// </summary>
	export class ReqPictureGet extends ReqPicture implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="Picture"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}