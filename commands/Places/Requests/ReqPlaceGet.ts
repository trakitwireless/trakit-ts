


	/**
	 * Gets details of the specified <see cref="Place"/>.
	 */
	export class ReqPlaceGet extends ReqPlace implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="Place"/> (if it exists).
		 */
		public includeDeleted: boolean = false;
	}