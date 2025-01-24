

	/**
	 * A container for the requested <see cref="providerScripts"/>.
	 */
	export abstract class RespProviderScriptList extends Response {
		/**
		 * The list of requested <see cref="ProviderScript"/>s.
		 */
		providerScripts: ProviderScript[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespProviderScriptListByCompany extends RespProviderScriptList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: RespId;
	}