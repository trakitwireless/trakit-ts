
	/**
	 * A container for the <see cref="user"/>.
	 */
	export class RespUserMerge extends Response {
		/**
		 * An object which contains the <c>id</c> and <c>company</c> keys when there is no error.
		 */
		public user: RespIdCompany;
	}