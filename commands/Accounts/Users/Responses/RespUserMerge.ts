
	/// <summary>
	/// A container for the <see cref="user"/>.
	/// </summary>
	export class RespUserMerge extends Response {
		/// <summary>
		/// An object which contains the <c>id</c> and <c>company</c> keys when there is no error.
		/// </summary>
		public user: RespIdCompany;
	}