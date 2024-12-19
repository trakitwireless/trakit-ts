
	/// <summary>
	/// For delete/restore commands, this contains the <see cref="User"/> login, version keys, owning <see cref="Company.id"/>, and deleted state.
	/// </summary>
	export class RespLoginDeleted extends RespLoginCompany {
		/// <summary>
		/// Flag showing if the object is deleted.
		/// </summary>
		public deleted: boolean = false;
		/// <summary>
		/// Object version keys used to validate synchronization for all object properties.
		/// </summary>
		public v: uint[] = [];
	}