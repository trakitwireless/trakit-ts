

	/// <summary>
	/// Gets details of the specified <see cref="Contact"/>.
	/// </summary>
	export class ReqContactGet extends ReqContact implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="Contact"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}