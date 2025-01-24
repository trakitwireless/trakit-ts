

	/**
	 * Gets details of the specified <see cref="ProviderConfigurationType"/>.
	 * @deprecated Use ReqProviderScriptGet instead
	 */
	export class ReqProviderConfigurationTypeGet extends ReqProviderConfigurationType implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="ProviderConfigurationType"/> (if it exists).
		 */
		public includeDeleted: boolean = false;
	}