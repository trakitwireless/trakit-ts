

	/**
	 * Gets details of the specified <see cref="behaviourLog"/>.
	 */
	export abstract class ReqBehaviourLogList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="BehaviourLog"/>s.
		 */
		public includeDeleted: boolean = false;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class ReqBehaviourLogListByCompany extends ReqBehaviourLogList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: ParamId;
	}