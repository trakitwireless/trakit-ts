

	/**
	 *  
	 */
	export class RespSelfPasswordMerge extends Response {
		/**
		 * Specific date/time of when the password will expire.
		 */
		expires: Date = DATE();
		/**
		 * Your {@link Company}'s {@link PasswordPolicy|password policy}.
		 */
		passwordPolicy: PasswordPolicy;
	}