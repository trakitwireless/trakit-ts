
	/**
	 * For delete/restore commands, this contains the id, version keys, owning <see cref="Company.id"/>, and deleted state.
	 */
	export abstract class RespIdDeleted extends RespIdCompany {
		/**
		 * Flag showing if the object is deleted.
		 */
		public deleted: boolean = false;
		/**
		 * Object version keys used to validate synchronization for all object properties.
		 */
		public v: uint[] = [];
	}