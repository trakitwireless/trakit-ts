
	/// <summary>
	/// A container for the <see cref="User"/> login and owning <see cref="Company.id"/> of the user requested/created.
	/// </summary>
	export class RespLoginCompany extends RespLogin {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which the <see cref="User"/> belongs.
		/// </summary>
		public company: ulong = NaN;
	}