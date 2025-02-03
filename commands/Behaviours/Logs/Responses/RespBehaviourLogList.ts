

	/**
	 * A container for the requested {@link behaviourLogs}.
	 */
	export abstract class RespBehaviourLogList extends Response {
		/**
		 * The list of requested {@link BehaviourLog}s.
		 */
		behaviourLogs: BehaviourLog[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespBehaviourLogListByCompany extends RespBehaviourLogList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}