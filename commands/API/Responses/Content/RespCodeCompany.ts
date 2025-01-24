

	/**
	 * A container for the id and owning <see cref="Company"/> of the <see cref="ProviderRegistration"/> requested/created.
	 */
	export class RespCodeCompany extends RespCode {
		/**
		 * Identifier of the <see cref="Company"/> to which this object belongs.
		 */
		public company: ulong = NaN;
	}