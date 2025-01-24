

	/**
	 * Gets details of the specified <see cref="behaviourScript"/>.
	 */
	export abstract class ReqBehaviourScriptList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="BehaviourScript"/>s.
		 */
		public includeDeleted: boolean = false;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class ReqBehaviourScriptListByCompany extends ReqBehaviourScriptList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: ParamId;
	}