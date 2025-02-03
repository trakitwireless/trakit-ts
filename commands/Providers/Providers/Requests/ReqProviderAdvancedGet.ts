

	/**
	 * Gets details of the specified {@link ProviderAdvanced}.
	 */
	export class ReqProviderAdvancedGet extends ReqProvider implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link ProviderAdvanced} (if it exists).
		 */
		includeDeleted: boolean = false;
	}