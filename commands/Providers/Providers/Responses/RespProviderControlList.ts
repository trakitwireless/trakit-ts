

	/// <summary>
	/// A container for the requested <see cref="providerControls"/>.
	/// </summary>
	export abstract class RespProviderControlList extends Response {
		/// <summary>
		/// The list of requested <see cref="ProviderControl"/>s.
		/// </summary>
		public providerControls: ProviderControl[] = [];
	}

	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespProviderControlListByCompany extends RespProviderControlList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}
	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespProviderControlListByConfig: RespProviderControlList {
		/// <summary>
		/// Identifier of the <see cref="ProviderConfig"/> (or <see cref="ProviderConfiguration"/>) to which this collection belongs.
		/// </summary>
		public config: RespId;
	}