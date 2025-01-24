

	/**
	 * Gets details of the specified <see cref="behaviour"/>.
	 */
	export abstract class ReqBehaviourList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="Behaviour"/>s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class ReqBehaviourListByCompany extends ReqBehaviourList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: ParamId;
	}