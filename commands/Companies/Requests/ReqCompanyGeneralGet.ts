

	/// <summary>
	/// Gets details of the specified <see cref="CompanyGeneral"/>.
	/// </summary>
	export class ReqCompanyGeneralGet extends ReqCompany implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="CompanyGeneral"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}