

	/**
	 * Gets details of the specified <see cref="ProviderConfig"/>.
	 */
	export class ReqProviderConfigGet extends ReqProviderConfig implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="ProviderConfig"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}