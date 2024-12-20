
	/// <summary>
	/// For delete/restore commands, this contains the id, owning <see cref="Company.parent"/>, and deleted state.
	/// </summary>
	export class RespParentDeleted extends RespId {
		/// <summary>
		/// Identifier of the <see cref="Company">parent</see> to which the <see cref="Company"/> is a child.
		/// </summary>
		public parent: ulong = NaN;
		/// <summary>
		/// Flag showing if the object is deleted.
		/// </summary>
		public deleted: boolean = false;
		/// <summary>
		/// Object version keys used to validate synchronization for all object properties.
		/// </summary>
		public v: uint[] = [];
	}