

	/**
	 * Gets details of the specified {@link providerRegistration}.
	 */
	export abstract class ReqProviderRegistrationList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link ProviderRegistration}s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqProviderRegistrationListByCompany extends ReqProviderRegistrationList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}