


	/// <summary>
	/// Gets details of the specified <see cref="FormResult"/>.
	/// </summary>
	export class ReqFormResultGet extends ReqFormResult implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="FormResult"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}