
	/**
	 * A container for the {@link User} login and owning {@link Company.id} of the user requested/created.
	 */
	export class RespLoginCompany extends RespLogin {
		/**
		 * Identifier of the {@link Company} to which the {@link User} belongs.
		 */
		company: ulong = NaN;
	}