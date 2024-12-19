

	/// <summary>
	/// A container for the <see cref="providerScript"/>.
	/// </summary>
	export class RespProviderScriptDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="ProviderScript"/>.
		/// </summary>
		public providerScript: RespIdDeleted;
	}