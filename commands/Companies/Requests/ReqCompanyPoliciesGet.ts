

	/**
	 * Gets details of the specified {@link CompanyPolicies}.
	 */
	export class ReqCompanyPoliciesGet extends ReqCompany implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link CompanyPolicies} (if it exists).
		 */
		includeDeleted: boolean = false;
	}