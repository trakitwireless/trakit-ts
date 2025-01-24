


	/**
	 * Gets details of the specified <see cref="FormResult"/>.
	 */
	export class ReqFormResultGet extends ReqFormResult implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="FormResult"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}