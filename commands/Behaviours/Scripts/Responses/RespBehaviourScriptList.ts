

	/**
	 * A container for the requested <see cref="behaviourScripts"/>.
	 */
	export abstract class RespBehaviourScriptList extends Response {
		/**
		 * The list of requested <see cref="BehaviourScript"/>s.
		 */
		public behaviourScripts: BehaviourScript[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespBehaviourScriptListByCompany extends RespBehaviourScriptList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: RespId;
	}