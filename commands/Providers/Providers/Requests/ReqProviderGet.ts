

	/**
	 * Gets details of the specified <see cref="Provider"/>.
	 */
	export class ReqProviderGet extends ReqProvider implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="Provider"/> (if it exists).
		 */
		public includeDeleted: boolean = false;
	}