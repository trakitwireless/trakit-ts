

	/**
	 * Gets details of the specified <see cref="CompanyStyles"/>.
	 */
	export class ReqCompanyStylesGet extends ReqCompany implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="CompanyStyles"/>s.
		 */
		includeDeleted: boolean = false;
	}