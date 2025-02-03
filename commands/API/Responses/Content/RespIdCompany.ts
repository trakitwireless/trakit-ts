

	/**
	 * A container for the id and owning {@link Company.id} of the object requested/created.
	 */
	export class RespIdCompany extends RespId implements IBelongCompany {
		/**
		 * Identifier of the {@link Company} to which this object belongs.
		 */
		company: ulong = NaN;
	}