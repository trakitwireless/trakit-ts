

	/**
	 * A container for the id and owning <see cref="Company"/> of the <see cref="Provider"/> requested/created.
	 */
	export class RespIdendifierCompany extends RespIdendifier {
		/**
		 * Identifier of the <see cref="Company"/> to which this object belongs.
		 */
		company: ulong = NaN;
	}