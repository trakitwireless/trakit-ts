

	/**
	 * A container for the requested <see cref="providerRegistrations"/>.
	 */
	export abstract class RespProviderRegistrationList extends Response {
		/**
		 * The list of requested <see cref="ProviderRegistration"/>s.
		 */
		providerRegistrations: ProviderRegistration[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespProviderRegistrationListByCompany extends RespProviderRegistrationList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: RespId;
	}