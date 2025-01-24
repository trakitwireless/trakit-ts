

	/**
	 * Gets details of the specified <see cref="ProviderScript"/>.
	 */
	export class ReqProviderScriptGet extends ReqProviderScript implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="ProviderScript"/> (if it exists).
		 */
		public includeDeleted: boolean = false;
	}