
	/// <summary>
	/// A container for the <see cref="providerConfig"/>.
	/// </summary>
	export class RespProviderConfigMerge extends Response {
		/// <summary>
		/// An object which contains the <c>id</c> and <c>company</c> keys when there is no error.
		/// </summary>
		public providerConfig: RespIdCompany;
	}