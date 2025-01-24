

	/**
	 * Gets details of the specified <see cref="CompanyDirectory"/>.
	 */
	export class ReqCompanyDirectoryGet extends ReqCompany implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="CompanyDirectory"/> (if it exists).
		 */
		public includeDeleted: boolean = false;
	}