

	/**
	 * Gets details of the specified {@link ProviderConfiguration}.
	 * @deprecated Use ReqProviderConfigGet instead
	 */
	export class ReqProviderConfigurationGet extends ReqProviderConfiguration implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link ProviderConfiguration} (if it exists).
		 */
		includeDeleted: boolean = false;
	}