

	/**
	 * Gets details of the specified <see cref="CompanyReseller"/>.
	 */
	export class ReqCompanyResellerGet extends ReqCompany implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="CompanyReseller"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}