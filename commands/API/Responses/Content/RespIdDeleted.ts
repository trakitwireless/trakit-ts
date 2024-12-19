
	/// <summary>
	/// For delete/restore commands, this contains the id, version keys, owning <see cref="Company.id"/>, and deleted state.
	/// </summary>
	export abstract class RespIdDeleted extends RespIdCompany {
		/// <summary>
		/// Flag showing if the object is deleted.
		/// </summary>
		public deleted: boolean = false;
		/// <summary>
		/// Object version keys used to validate synchronization for all object properties.
		/// </summary>
		public v: uint[] = [];
	}