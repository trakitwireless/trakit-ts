

	/**
	 * Gets details of the specified <see cref="providerRegistration"/>.
	 */
	export abstract class ReqProviderRegistrationList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="ProviderRegistration"/>s.
		 */
		public includeDeleted: boolean = false;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class ReqProviderRegistrationListByCompany extends ReqProviderRegistrationList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: ParamId;
	}