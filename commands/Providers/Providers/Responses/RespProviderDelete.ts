

	/// <summary>
	/// A container for the <see cref="provider"/>.
	/// </summary>
	export class RespProviderDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="Provider"/>.
		/// </summary>
		public provider: RespIdendifierDeleted;
	}