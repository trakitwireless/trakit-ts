
	/**
	 * For suspend/revive commands, this contains the <see cref="Provider"/> id, version keys, owning <see cref="Company.id"/>, and suspended state.
	 */
	export class RespIdendifierSuspended extends RespIdendifierCompany {
		/**
		 * Flag showing if the object is suspended.
		 */
		public suspended: boolean = false;
		/**
		 * Object version keys used to validate synchronization for all object properties.
		 */
		public v: uint[] = [];
	}