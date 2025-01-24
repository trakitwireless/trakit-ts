
	/**
	 * The password complexity and expiry policy.
	 */
	export class PasswordPolicy {
		/**
		 * The minimum number of characters required.
		 */
		public minimumLength: byte = NaN;
		/**
		 * Do passwords require alphabetical characters.
		 */
		public includeLetters: boolean = false;
		/**
		 * Do passwords require numeric characters.
		 */
		public includeNumbers: boolean = false;
		/**
		 * Do passwords require upper-case and lower-case letters.
		 */
		public includeUpperLower: boolean = false;
		/**
		 * Do passwords require non-alphanumeric characters.
		 */
		public includeSpecial: boolean = false;
		/**
		 * Defines how passwords expire.
		 */
		public expireMode: PasswordExpiryMode;
		/**
		 * The threshold for expiry.
		 */
		public expireThreshold: byte = NaN;  // days
	}