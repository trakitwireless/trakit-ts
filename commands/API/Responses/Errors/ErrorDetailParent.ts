
	/// <summary>
	/// Details for how a circular company tree would have been created.
	/// </summary>
	export class ErrorDetailParent extends ErrorDetail {
		/// <summary>
		/// The <see cref="Company.parent"/> specified in the parameters.
		/// </summary>
		public parent: ulong = NaN;
		/// <summary>
		/// ID of the child <see cref="Company"/> that would cause a circular reference.
		/// </summary>
		public descendant: ulong = NaN;
	}