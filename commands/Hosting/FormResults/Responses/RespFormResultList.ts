


	/**
	 * A container for the requested <see cref="formResults"/>.
	 */
	export abstract class RespFormResultList extends Response {
		/**
		 * The list of requested <see cref="FormResult"/>s.
		 */
		formResults: FormResult[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespFormResultListByCompany extends RespFormResultList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: RespId;
	}