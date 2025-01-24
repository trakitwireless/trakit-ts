

	/**
	 * A container for the requested <see cref="behaviourLogs"/>.
	 */
	export abstract class RespBehaviourLogList extends Response {
		/**
		 * The list of requested <see cref="BehaviourLog"/>s.
		 */
		behaviourLogs: BehaviourLog[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespBehaviourLogListByCompany extends RespBehaviourLogList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: RespId;
	}