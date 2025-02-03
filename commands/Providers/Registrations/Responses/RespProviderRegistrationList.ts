

	/**
	 * A container for the requested {@link providerRegistrations}.
	 */
	export abstract class RespProviderRegistrationList extends Response {
		/**
		 * The list of requested {@link ProviderRegistration}s.
		 */
		providerRegistrations: ProviderRegistration[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespProviderRegistrationListByCompany extends RespProviderRegistrationList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}