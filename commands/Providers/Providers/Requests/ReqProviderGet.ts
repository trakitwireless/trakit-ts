

	/**
	 * Gets details of the specified {@link Provider}.
	 */
	export class ReqProviderGet extends ReqProvider implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link Provider} (if it exists).
		 */
		includeDeleted: boolean = false;
	}