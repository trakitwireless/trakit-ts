

	/// <summary>
	/// Gets details of the specified <see cref="CompanyPolicies"/>.
	/// </summary>
	export class ReqCompanyPoliciesGet extends ReqCompany implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="CompanyPolicies"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}