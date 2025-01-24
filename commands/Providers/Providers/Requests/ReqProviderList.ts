

	/**
	 * Gets details of the specified <see cref="provider"/>.
	 */
	export abstract class ReqProviderList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="Provider"/>s.
		 */
		public includeDeleted: boolean = false;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class ReqProviderListByCompany extends ReqProviderList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: ParamId;
	}