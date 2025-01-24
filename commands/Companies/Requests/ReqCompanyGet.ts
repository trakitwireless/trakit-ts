

	/**
	 * Gets details of the specified <see cref="Company"/>.
	 */
	export class ReqCompanyGet extends ReqCompany implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="Company"/> (if it exists).
		 */
		public includeDeleted: boolean = false;
	}