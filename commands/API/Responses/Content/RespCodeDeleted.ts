

	/**
	 * A container for the id of the {@link ProviderRegistration} requested/created.
	 * For delete/restore commands, this contains the {@link ProviderRegistration.code}, owning {@link Company.id}, and deleted state.
	 */
	export class RespCodeDeleted extends RespCodeCompany {
		/**
		 * Flag showing if the object is deleted.
		 */
		deleted: boolean = false;
	}