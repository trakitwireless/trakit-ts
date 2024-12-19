

	/// <summary>
	/// Gets details of the specified <see cref="Icon"/>.
	/// </summary>
	export class ReqIconGet extends ReqIcon implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="Icon"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}