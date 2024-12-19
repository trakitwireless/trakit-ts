
	/// <summary>
	/// A container for the <see cref="contact"/>.
	/// </summary>
	export class RespContactMerge extends Response {
		/// <summary>
		/// An object which contains the <c>id</c> and <c>company</c> keys when there is no error.
		/// </summary>
		public contact: RespIdCompany;
	}