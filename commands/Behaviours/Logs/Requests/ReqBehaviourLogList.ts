

	/**
	 * Gets details of the specified {@link behaviourLog}.
	 */
	export abstract class ReqBehaviourLogList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link BehaviourLog}s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqBehaviourLogListByCompany extends ReqBehaviourLogList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}