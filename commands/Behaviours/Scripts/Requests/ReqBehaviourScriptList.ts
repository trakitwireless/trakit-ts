

	/**
	 * Gets details of the specified {@link behaviourScript}.
	 */
	export abstract class ReqBehaviourScriptList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link BehaviourScript}s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqBehaviourScriptListByCompany extends ReqBehaviourScriptList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}