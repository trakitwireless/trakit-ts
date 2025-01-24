
	/**
	 * For delete/restore commands, this contains the <see cref="User"/> login, version keys, owning <see cref="Company.id"/>, and deleted state.
	 */
	export class RespLoginDeleted extends RespLoginCompany {
		/**
		 * Flag showing if the object is deleted.
		 */
		public deleted: boolean = false;
		/**
		 * Object version keys used to validate synchronization for all object properties.
		 */
		public v: uint[] = [];
	}