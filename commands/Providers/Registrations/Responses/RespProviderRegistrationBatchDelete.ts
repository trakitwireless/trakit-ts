

	/// <summary>
	/// A container for the <see cref="providerRegistration"/>.
	/// </summary>
	export class RespProviderRegistrationBatchDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="ProviderRegistration"/>.
		/// </summary>
		public providerRegistrations: RespCodeDeleted[] = [];
	}