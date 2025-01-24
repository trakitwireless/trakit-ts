

	/**
	 * Gets details of the specified <see cref="ProviderConfiguration"/>.
	 * @deprecated Use ReqProviderConfigGet instead
	 */
	export class ReqProviderConfigurationGet extends ReqProviderConfiguration implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="ProviderConfiguration"/> (if it exists).
		 */
		public includeDeleted: boolean = false;
	}