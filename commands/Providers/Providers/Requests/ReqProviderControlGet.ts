

	/**
	 * Gets details of the specified <see cref="ProviderControl"/>.
	 */
	export class ReqProviderControlGet extends ReqProvider implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="ProviderControl"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}