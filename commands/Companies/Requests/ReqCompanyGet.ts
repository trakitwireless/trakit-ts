

	/**
	 * Gets details of the specified {@link Company}.
	 */
	export class ReqCompanyGet extends ReqCompany implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link Company} (if it exists).
		 */
		includeDeleted: boolean = false;
	}