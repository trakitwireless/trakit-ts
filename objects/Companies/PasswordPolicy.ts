
	/**
	 * The password complexity and expiry policy.
	 */
	export class PasswordPolicy {
		/**
		 * The minimum number of characters required.
		 */
		minimumLength: byte = NaN;
		/**
		 * Do passwords require alphabetical characters.
		 */
		includeLetters: boolean = false;
		/**
		 * Do passwords require numeric characters.
		 */
		includeNumbers: boolean = false;
		/**
		 * Do passwords require upper-case and lower-case letters.
		 */
		includeUpperLower: boolean = false;
		/**
		 * Do passwords require non-alphanumeric characters.
		 */
		includeSpecial: boolean = false;
		/**
		 * Defines how passwords expire.
		 */
		expireMode: PasswordExpiryMode;
		/**
		 * The threshold for expiry.
		 */
		expireThreshold: byte = NaN;  // days
	}