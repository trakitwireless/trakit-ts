

	/**
	 * Gets details of the specified {@link Contact}.
	 */
	export class ReqContactGet extends ReqContact implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link Contact} (if it exists).
		 */
		includeDeleted: boolean = false;
	}