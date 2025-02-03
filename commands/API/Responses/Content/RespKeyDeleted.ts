
	/**
	 * For delete/restore commands, this contains the {@link Machine.key}, version keys, owning {@link Company.id}, and deleted state.
	 */
	export class RespKeyDeleted extends RespKeyCompany {
		/**
		 * Flag showing if the object is deleted.
		 */
		deleted: boolean = false;
		/**
		 * Object version keys used to validate synchronization for all object properties.
		 */
		v: uint[] = [];
	}