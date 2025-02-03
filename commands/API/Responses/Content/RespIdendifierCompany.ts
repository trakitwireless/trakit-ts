

	/**
	 * A container for the id and owning {@link Company} of the {@link Provider} requested/created.
	 */
	export class RespIdendifierCompany extends RespIdendifier {
		/**
		 * Identifier of the {@link Company} to which this object belongs.
		 */
		company: ulong = NaN;
	}