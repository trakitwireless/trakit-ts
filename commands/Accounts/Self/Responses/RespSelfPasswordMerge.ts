

	/**
	 *  
	 */
	export class RespSelfPasswordMerge extends Response {
		/**
		 * Specific date/time of when the password will expire.
		 */
		expires: Date = DATE();
		/**
		 * Your <see cref="Company"/>'s <see cref="PasswordPolicy">password policy</see>.
		 */
		passwordPolicy: PasswordPolicy;
	}