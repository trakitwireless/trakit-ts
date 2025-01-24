
	/**
	 * A container for the <see cref="User"/> login and owning <see cref="Company.id"/> of the user requested/created.
	 */
	export class RespLoginCompany extends RespLogin {
		/**
		 * Identifier of the <see cref="Company"/> to which the <see cref="User"/> belongs.
		 */
		public company: ulong = NaN;
	}