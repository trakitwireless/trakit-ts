

	/**
	 * Gets details of the specified <see cref="UserAdvanced"/>.
	 */
	export class ReqUserAdvancedGet extends ReqUser implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="UserAdvanced"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}