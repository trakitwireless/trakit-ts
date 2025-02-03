


	/**
	 * Gets details of the specified {@link formResult}.
	 */
	export abstract class ReqFormResultList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link FormResult}s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqFormResultListByCompany extends ReqFormResultList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}