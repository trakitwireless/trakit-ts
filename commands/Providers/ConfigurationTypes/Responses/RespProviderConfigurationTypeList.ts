

	/// <summary>
	/// A container for the requested <see cref="providerConfigurationTypes"/>.
	/// </summary>
	[Obsolete("Use RespProviderScriptList instead")]
	export abstract class RespProviderConfigurationTypeList extends Response {
		/// <summary>
		/// The list of requested <see cref="ProviderConfigurationType"/>s.
		/// </summary>
		public providerConfigurationTypes: ProviderConfigurationType[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	[Obsolete("Use RespProviderScriptListByCompany instead")]
	export class RespProviderConfigurationTypeListByCompany extends RespProviderConfigurationTypeList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}