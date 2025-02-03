


	/**
	 * A container for the requested {@link formResults}.
	 */
	export abstract class RespFormResultList extends Response {
		/**
		 * The list of requested {@link FormResult}s.
		 */
		formResults: FormResult[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespFormResultListByCompany extends RespFormResultList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}