


	/// <summary>
	/// Gets details of the specified <see cref="Place"/>.
	/// </summary>
	export class ReqPlaceGet extends ReqPlace implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="Place"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}