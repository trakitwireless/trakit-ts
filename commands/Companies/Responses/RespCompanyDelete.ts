

	/**
	 * A container for the <see cref="company"/>.
	 */
	export class RespCompanyDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="Company"/>.
		 */
		company: RespIdDeleted;
	}