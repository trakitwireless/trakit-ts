

	/// <summary>
	/// Gets details of the specified <see cref="DispatchTask"/>.
	/// </summary>
	export class ReqDispatchTaskGet extends ReqDispatchTask implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="DispatchTask"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}