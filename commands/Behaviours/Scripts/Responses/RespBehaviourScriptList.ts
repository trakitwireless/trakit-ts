

	/**
	 * A container for the requested {@link behaviourScripts}.
	 */
	export abstract class RespBehaviourScriptList extends Response {
		/**
		 * The list of requested {@link BehaviourScript}s.
		 */
		behaviourScripts: BehaviourScript[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespBehaviourScriptListByCompany extends RespBehaviourScriptList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}