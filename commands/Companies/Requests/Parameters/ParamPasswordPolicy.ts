

	/**
	 * Parameter values for creating a new or updating an existing <see cref="PasswordPolicy"/>.
	 */
	export class ParamPasswordPolicy extends ParamMerge {
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
		public expireMode?: PasswordExpiryMode;
		/**
		 * The threshold for expiry (in days).
		 */
		public expireThreshold: byte = NaN;  
	}