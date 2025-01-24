

	/**
	 * Gets details of the specified <see cref="ProviderAdvanced"/>.
	 */
	export class ReqProviderAdvancedGet extends ReqProvider implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="ProviderAdvanced"/> (if it exists).
		 */
		public includeDeleted: boolean = false;
	}