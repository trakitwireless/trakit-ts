

	/**
	 * Gets details of the specified {@link provider}.
	 */
	export abstract class ReqProviderList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link Provider}s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqProviderListByCompany extends ReqProviderList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}