

	/**
	 * Gets details of the specified {@link ProviderScript}.
	 */
	export class ReqProviderScriptGet extends ReqProviderScript implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link ProviderScript} (if it exists).
		 */
		includeDeleted: boolean = false;
	}