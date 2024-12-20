
	/// <summary>
	/// For suspend/revive commands, this contains the <see cref="Provider"/> id, version keys, owning <see cref="Company.id"/>, and suspended state.
	/// </summary>
	export class RespIdendifierSuspended extends RespIdendifierCompany {
		/// <summary>
		/// Flag showing if the object is suspended.
		/// </summary>
		public suspended: boolean = false;
		/// <summary>
		/// Object version keys used to validate synchronization for all object properties.
		/// </summary>
		public v: uint[] = [];
	}