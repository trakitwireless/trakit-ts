

	/**
	 * Gets details of the specified {@link CompanyReseller}.
	 */
	export class ReqCompanyResellerGet extends ReqCompany implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link CompanyReseller} (if it exists).
		 */
		includeDeleted: boolean = false;
	}