
	/// <summary>
	/// A container for the <see cref="document"/>.
	/// </summary>
	export class RespDocumentMerge extends Response {
		/// <summary>
		/// An object which contains the <c>id</c> and <c>company</c> keys when there is no error.
		/// </summary>
		public document: RespIdCompany;
	}