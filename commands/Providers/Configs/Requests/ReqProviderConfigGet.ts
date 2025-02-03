

	/**
	 * Gets details of the specified {@link ProviderConfig}.
	 */
	export class ReqProviderConfigGet extends ReqProviderConfig implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link ProviderConfig} (if it exists).
		 */
		includeDeleted: boolean = false;
	}