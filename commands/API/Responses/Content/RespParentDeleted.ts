
	/**
	 * For delete/restore commands, this contains the id, owning <see cref="Company.parent"/>, and deleted state.
	 */
	export class RespParentDeleted extends RespId {
		/**
		 * Identifier of the <see cref="Company">parent</see> to which the <see cref="Company"/> is a child.
		 */
		public parent: ulong = NaN;
		/**
		 * Flag showing if the object is deleted.
		 */
		public deleted: boolean = false;
		/**
		 * Object version keys used to validate synchronization for all object properties.
		 */
		public v: uint[] = [];
	}