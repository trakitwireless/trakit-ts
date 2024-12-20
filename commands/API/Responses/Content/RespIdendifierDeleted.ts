

	/// <summary>
	/// For delete/restore commands, this contains the <see cref="Provider.id"/>, version keys, owning <see cref="Company.id"/>, and deleted state.
	/// </summary>
	export class RespIdendifierDeleted extends RespIdendifierCompany {
		/// <summary>
		/// Flag showing if the object is deleted.
		/// </summary>
		public deleted: boolean = false;
		/// <summary>
		/// Object version keys used to validate synchronization for all object properties.
		/// </summary>
		public v: uint[] = [];
	}