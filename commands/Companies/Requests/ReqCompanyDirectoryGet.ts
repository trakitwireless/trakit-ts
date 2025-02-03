

	/**
	 * Gets details of the specified {@link CompanyDirectory}.
	 */
	export class ReqCompanyDirectoryGet extends ReqCompany implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link CompanyDirectory} (if it exists).
		 */
		includeDeleted: boolean = false;
	}