
	/**
	 * For delete/restore commands, this contains the id, owning {@link Company.parent}, and deleted state.
	 */
	export class RespParentDeleted extends RespId {
		/**
		 * Identifier of the {@link Company|parent} to which the {@link Company} is a child.
		 */
		parent: ulong = NaN;
		/**
		 * Flag showing if the object is deleted.
		 */
		deleted: boolean = false;
		/**
		 * Object version keys used to validate synchronization for all object properties.
		 */
		v: uint[] = [];
	}