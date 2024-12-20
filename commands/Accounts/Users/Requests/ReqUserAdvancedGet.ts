

	/// <summary>
	/// Gets details of the specified <see cref="UserAdvanced"/>.
	/// </summary>
	export class ReqUserAdvancedGet extends ReqUser implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="UserAdvanced"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}