

	/**
	 * For delete/restore commands, this contains the <see cref="Provider.id"/>, version keys, owning <see cref="Company.id"/>, and deleted state.
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