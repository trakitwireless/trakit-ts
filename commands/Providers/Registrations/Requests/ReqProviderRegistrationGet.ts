

	/**
	 * Gets details of the specified <see cref="ProviderRegistration"/>.
	 */
	export class ReqProviderRegistrationGet extends ReqProviderRegistration implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="ProviderRegistration"/> (if it exists).
		 */
		public includeDeleted: boolean = false;
	}