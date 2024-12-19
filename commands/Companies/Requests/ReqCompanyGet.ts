

	/// <summary>
	/// Gets details of the specified <see cref="Company"/>.
	/// </summary>
	export class ReqCompanyGet extends ReqCompany implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="Company"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}