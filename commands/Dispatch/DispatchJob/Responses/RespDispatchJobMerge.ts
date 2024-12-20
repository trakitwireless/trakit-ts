
	/// <summary>
	/// A container for the <see cref="dispatchJob"/>.
	/// </summary>
	export class RespDispatchJobMerge extends Response {
		/// <summary>
		/// An object which contains the <c>id</c> and <c>company</c> keys when there is no error.
		/// </summary>
		public dispatchJob: RespIdCompany;
	}