

	/// <summary>
	/// A container for the <see cref="providerConfig"/>.
	/// </summary>
	export class RespProviderConfigDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="ProviderConfig"/>.
		/// </summary>
		public providerConfig: RespIdDeleted;
	}