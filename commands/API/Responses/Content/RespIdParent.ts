
	/// <summary>
	/// A container for the id and the requested/created <see cref="Company.parent"/>.
	/// </summary>
	export class RespIdParent extends RespId {
		/// <summary>
		/// Identifier of the parent to which this company belongs
		/// </summary>
		public parent: ulong = NaN;
	}