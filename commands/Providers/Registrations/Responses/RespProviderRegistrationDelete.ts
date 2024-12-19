

	/// <summary>
	/// A container for the <see cref="providerRegistration"/>.
	/// </summary>
	export class RespProviderRegistrationDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="ProviderRegistration"/>.
		/// </summary>
		public providerRegistration: RespIdDeleted;
	}