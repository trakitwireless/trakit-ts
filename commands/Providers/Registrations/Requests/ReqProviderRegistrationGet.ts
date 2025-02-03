

	/**
	 * Gets details of the specified {@link ProviderRegistration}.
	 */
	export class ReqProviderRegistrationGet extends ReqProviderRegistration implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link ProviderRegistration} (if it exists).
		 */
		includeDeleted: boolean = false;
	}