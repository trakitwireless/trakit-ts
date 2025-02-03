

	/**
	 * Gets details of the specified {@link ProviderGeneral}.
	 */
	export class ReqProviderGeneralGet extends ReqProvider implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link ProviderGeneral} (if it exists).
		 */
		includeDeleted: boolean = false;
	}