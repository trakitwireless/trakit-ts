

	/// <summary>
	/// A container for the <see cref="machine"/>.
	/// </summary>
	export class RespMachineDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="Machine"/>.
		/// </summary>
		public machine: RespIdDeleted;
	}