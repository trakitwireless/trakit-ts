

	/**
	 * Gets details of the specified <see cref="UserGeneral"/>.
	 */
	export class ReqUserGeneralGet extends ReqUser implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="UserGeneral"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}