

	/**
	 * Gets details of the specified {@link UserAdvanced}.
	 */
	export class ReqUserAdvancedGet extends ReqUser implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link UserAdvanced} (if it exists).
		 */
		includeDeleted: boolean = false;
	}