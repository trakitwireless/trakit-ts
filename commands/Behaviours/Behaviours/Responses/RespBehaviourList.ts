

	/**
	 * A container for the requested {@link behaviours}.
	 */
	export abstract class RespBehaviourList extends Response {
		/**
		 * The list of requested {@link Behaviour}s.
		 */
		behaviours: Behaviour[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespBehaviourListByCompany extends RespBehaviourList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}