

	/**
	 * Gets details of the specified <see cref="CompanyGeneral"/>.
	 */
	export class ReqCompanyGeneralGet extends ReqCompany implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="CompanyGeneral"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}