

	/// <summary>
	/// A container for the requested <see cref="providerConfigs"/>.
	/// </summary>
	export abstract class RespProviderConfigList extends Response {
		/// <summary>
		/// The list of requested <see cref="ProviderConfig"/>s.
		/// </summary>
		public providerConfigs: ProviderConfig[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespProviderConfigListByCompany extends RespProviderConfigList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}