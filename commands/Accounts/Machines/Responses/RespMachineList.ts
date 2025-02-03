

	/**
	 * A container for the requested {@link machines}.
	 */
	export abstract class RespMachineList extends Response {
		/**
		 * The list of requested {@link Machine}s.
		 */
		machines: Machine[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespMachineListByCompany extends RespMachineList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}