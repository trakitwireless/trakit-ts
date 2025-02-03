

	/**
	 * Gets details of the specified {@link behaviour}.
	 */
	export abstract class ReqBehaviourList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link Behaviour}s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqBehaviourListByCompany extends ReqBehaviourList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}