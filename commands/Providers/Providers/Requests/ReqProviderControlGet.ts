

	/**
	 * Gets details of the specified {@link ProviderControl}.
	 */
	export class ReqProviderControlGet extends ReqProvider implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link ProviderControl} (if it exists).
		 */
		includeDeleted: boolean = false;
	}