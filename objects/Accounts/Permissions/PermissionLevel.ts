
	/// <summary>
	/// The levels of permission available.
	/// </summary>
	export enum PermissionLevel {
		/// <summary>
		/// Read-only access, no changes allowed.
		/// </summary>
		read,
		/// <summary>
		/// Read and write access, but things cannot be deleted or new things created.
		/// </summary>
		update,
		/// <summary>
		/// Full control to read, write, delete and create things.
		/// </summary>
		full,
	}