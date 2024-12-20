

	/// <summary>
	/// A container for the requested <see cref="providerAdvanceds"/>.
	/// </summary>
	export abstract class RespProviderAdvancedList extends Response {
		/// <summary>
		/// The list of requested <see cref="ProviderAdvanced"/>s.
		/// </summary>
		public providerAdvanceds: ProviderAdvanced[] = [];
	}

	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespProviderAdvancedListByCompany extends RespProviderAdvancedList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}
	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespProviderAdvancedListByConfig: RespProviderAdvancedList {
		/// <summary>
		/// Identifier of the <see cref="ProviderConfig"/> (or <see cref="ProviderConfiguration"/>) to which this collection belongs.
		/// </summary>
		public config: RespId;
	}