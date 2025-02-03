

	/**
	 * For delete/restore commands, this contains the {@link Provider.id}, version keys, owning {@link Company.id}, and deleted state.
	 */
	export class RespIdendifierDeleted extends RespIdendifierCompany {
		/**
		 * Flag showing if the object is deleted.
		 */
		deleted: boolean = false;
		/**
		 * Object version keys used to validate synchronization for all object properties.
		 */
		v: uint[] = [];
	}