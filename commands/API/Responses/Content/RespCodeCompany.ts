

	/// <summary>
	/// A container for the id and owning <see cref="Company"/> of the <see cref="ProviderRegistration"/> requested/created.
	/// </summary>
	export class RespCodeCompany extends RespCode {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this object belongs.
		/// </summary>
		public company: ulong = NaN;
	}