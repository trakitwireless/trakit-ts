

	/// <summary>
	/// A container for the requested <see cref="providers"/>.
	/// </summary>
	export abstract class RespProviderList extends Response {
		/// <summary>
		/// The list of requested <see cref="Provider"/>s.
		/// </summary>
		public providers: Provider[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespProviderListByCompany extends RespProviderList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}
	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespProviderListByConfig extends RespProviderList {
		/// <summary>
		/// Identifier of the <see cref="ProviderConfig"/> (or <see cref="ProviderConfiguration"/>) to which this collection belongs.
		/// </summary>
		public config: RespId;
	}