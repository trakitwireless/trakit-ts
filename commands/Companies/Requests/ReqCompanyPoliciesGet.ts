

	/**
	 * Gets details of the specified <see cref="CompanyPolicies"/>.
	 */
	export class ReqCompanyPoliciesGet extends ReqCompany implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="CompanyPolicies"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}