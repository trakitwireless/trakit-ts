

	/**
	 * Gets details of the specified <see cref="ProviderGeneral"/>.
	 */
	export class ReqProviderGeneralGet extends ReqProvider implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="ProviderGeneral"/> (if it exists).
		 */
		public includeDeleted: boolean = false;
	}