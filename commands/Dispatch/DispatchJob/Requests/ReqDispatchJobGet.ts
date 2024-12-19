

	/// <summary>
	/// Gets details of the specified <see cref="DispatchJob"/>.
	/// </summary>
	export class ReqDispatchJobGet extends ReqDispatchJob implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="DispatchJob"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}