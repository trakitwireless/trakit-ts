

	/// <summary>
	/// A container for the requested <see cref="providerConfigurations"/>.
	/// </summary>
	[Obsolete("Use RespProviderConfigList instead")]
	export abstract class RespProviderConfigurationList extends Response {
		/// <summary>
		/// The list of requested <see cref="ProviderConfiguration"/>s.
		/// </summary>
		public providerConfigurations: ProviderConfiguration[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	[Obsolete("Use RespProviderConfigListByCompany instead")]
	export class RespProviderConfigurationListByCompany extends RespProviderConfigurationList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}