

	/// <summary>
	/// A container for the requested <see cref="providerScripts"/>.
	/// </summary>
	export abstract class RespProviderScriptList extends Response {
		/// <summary>
		/// The list of requested <see cref="ProviderScript"/>s.
		/// </summary>
		public providerScripts: ProviderScript[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespProviderScriptListByCompany extends RespProviderScriptList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}