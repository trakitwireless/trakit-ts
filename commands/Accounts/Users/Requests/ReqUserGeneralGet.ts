

	/// <summary>
	/// Gets details of the specified <see cref="UserGeneral"/>.
	/// </summary>
	export class ReqUserGeneralGet extends ReqUser implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="UserGeneral"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}