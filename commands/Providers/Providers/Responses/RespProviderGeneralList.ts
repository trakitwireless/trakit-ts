

	/// <summary>
	/// A container for the requested <see cref="providerGenerals"/>.
	/// </summary>
	export abstract class RespProviderGeneralList extends Response {
		/// <summary>
		/// The list of requested <see cref="ProviderGeneral"/>s.
		/// </summary>
		public providerGenerals: ProviderGeneral[] = [];
	}

	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespProviderGeneralListByCompany extends RespProviderGeneralList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}
	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespProviderGeneralListByConfig extends RespProviderGeneralList {
		/// <summary>
		/// Identifier of the <see cref="ProviderConfig"/> (or <see cref="ProviderConfiguration"/>) to which this collection belongs.
		/// </summary>
		public config: RespId;
	}