

	/**
	 * Gets details of the specified {@link CompanyStyles}.
	 */
	export class ReqCompanyStylesGet extends ReqCompany implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link CompanyStyles}s.
		 */
		includeDeleted: boolean = false;
	}