
	/**
	 * For delete/restore commands, this contains the id, version keys, owning {@link Company.id}, and deleted state.
	 */
	export abstract class RespIdDeleted extends RespIdCompany {
		/**
		 * Flag showing if the object is deleted.
		 */
		deleted: boolean = false;
		/**
		 * Object version keys used to validate synchronization for all object properties.
		 */
		v: uint[] = [];
	}