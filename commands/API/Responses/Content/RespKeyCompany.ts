
	/**
	 * A container for the <see cref="Machine.key"/> and owning <see cref="Company.id"/> of the <see cref="Machine"/> requested/created.
	 */
	export class RespKeyCompany extends RespKey {
		/**
		 * Identifier of the <see cref="Company"/> to which the <see cref="Machine"/> belongs.
		 */
		public company: ulong = NaN;
	}