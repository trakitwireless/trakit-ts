

	/**
	 * Gets details of the specified <see cref="User"/>.
	 */
	export class ReqUserGet extends ReqUser implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="User"/> (if it exists).
		 */
		public includeDeleted: boolean = false;
	}