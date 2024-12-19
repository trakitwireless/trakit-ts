

	/// <summary>
	/// A container for the requested <see cref="providerRegistrations"/>.
	/// </summary>
	export abstract class RespProviderRegistrationList extends Response {
		/// <summary>
		/// The list of requested <see cref="ProviderRegistration"/>s.
		/// </summary>
		public providerRegistrations: ProviderRegistration[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespProviderRegistrationListByCompany extends RespProviderRegistrationList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}