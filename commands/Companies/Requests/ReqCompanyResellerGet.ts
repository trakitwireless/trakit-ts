

	/// <summary>
	/// Gets details of the specified <see cref="CompanyReseller"/>.
	/// </summary>
	export class ReqCompanyResellerGet extends ReqCompany implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="CompanyReseller"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}