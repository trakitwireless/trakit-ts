
	/// <summary>
	/// A container for the id, <see cref="Asset"/> id, and owning <see cref="Company.id"/> of the <see cref="Provider"/> requested/created.
	/// </summary>
	export class RespIdendifierAsset extends RespIdendifierCompany {
		/// <summary>
		/// Identifier of the <see cref="Asset"/> to which this object belongs.
		/// </summary>
		/// <remarks>
		/// This value must remain nullable because Providers can have a null value for their asset member.
		/// </remarks>
		public asset: ulong = NaN;
	}