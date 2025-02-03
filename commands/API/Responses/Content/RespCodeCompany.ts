

	/**
	 * A container for the id and owning {@link Company} of the {@link ProviderRegistration} requested/created.
	 */
	export class RespCodeCompany extends RespCode {
		/**
		 * Identifier of the {@link Company} to which this object belongs.
		 */
		company: ulong = NaN;
	}