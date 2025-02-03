
	/**
	 * A container for the {@link Machine.key} and owning {@link Company.id} of the {@link Machine} requested/created.
	 */
	export class RespKeyCompany extends RespKey {
		/**
		 * Identifier of the {@link Company} to which the {@link Machine} belongs.
		 */
		company: ulong = NaN;
	}