

	/**
	 * A container for the requested {@link providerScripts}.
	 */
	export abstract class RespProviderScriptList extends Response {
		/**
		 * The list of requested {@link ProviderScript}s.
		 */
		providerScripts: ProviderScript[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespProviderScriptListByCompany extends RespProviderScriptList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}