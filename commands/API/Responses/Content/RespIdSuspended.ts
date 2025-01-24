
	/**
	 * For suspend/revive commands, this contains the id, version keys, owning <see cref="Company.id"/>, and suspended state.
	 */
	export class RespIdSuspended extends RespIdCompany {
		/**
		 * Flag showing if the object is suspended.
		 */
		suspended: boolean = false;
		/**
		 * Object version keys used to validate synchronization for all object properties.
		 */
		v: uint[] = [];
	}