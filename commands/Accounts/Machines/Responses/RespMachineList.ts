

	/**
	 * A container for the requested <see cref="machines"/>.
	 */
	export abstract class RespMachineList extends Response {
		/**
		 * The list of requested <see cref="Machine"/>s.
		 */
		public machines: Machine[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespMachineListByCompany extends RespMachineList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: RespId;
	}