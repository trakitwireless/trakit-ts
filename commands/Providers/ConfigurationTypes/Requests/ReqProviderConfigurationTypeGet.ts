

	/**
	 * Gets details of the specified {@link ProviderConfigurationType}.
	 * @deprecated Use ReqProviderScriptGet instead
	 */
	export class ReqProviderConfigurationTypeGet extends ReqProviderConfigurationType implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link ProviderConfigurationType} (if it exists).
		 */
		includeDeleted: boolean = false;
	}