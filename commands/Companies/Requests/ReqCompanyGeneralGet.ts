

	/**
	 * Gets details of the specified {@link CompanyGeneral}.
	 */
	export class ReqCompanyGeneralGet extends ReqCompany implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link CompanyGeneral} (if it exists).
		 */
		includeDeleted: boolean = false;
	}