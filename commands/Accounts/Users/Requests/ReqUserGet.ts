

	/// <summary>
	/// Gets details of the specified <see cref="User"/>.
	/// </summary>
	export class ReqUserGet extends ReqUser implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="User"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}