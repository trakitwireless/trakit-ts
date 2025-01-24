

	/**
	 * A container for the requested <see cref="behaviours"/>.
	 */
	export abstract class RespBehaviourList extends Response {
		/**
		 * The list of requested <see cref="Behaviour"/>s.
		 */
		public behaviours: Behaviour[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespBehaviourListByCompany extends RespBehaviourList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: RespId;
	}