
	/// <summary>
	/// A container for the id, script id, and owning <see cref="Company.id"/> of the object requested/created.
	/// </summary>
	export class RespIdScript extends RespIdCompany {
		/// <summary>
		/// Identifier of the script to which this object belongs.
		/// </summary>
		public script: ulong = NaN;
	}