

	/// <summary>
	/// Gets details of the specified <see cref="CompanyStyles"/>.
	/// </summary>
	export class ReqCompanyStylesGet extends ReqCompany implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return  deleted <see cref="CompanyStyles"/>s.
		/// </summary>
		public includeDeleted: boolean = false;
	}