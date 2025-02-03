

	/**
	 * Parameter values for creating a new or updating an existing {@link PasswordPolicy}.
	 */
	export class ParamPasswordPolicy extends ParamMerge {
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
		expireMode?: PasswordExpiryMode;
		/**
		 * The threshold for expiry (in days).
		 */
		expireThreshold: byte = NaN;  
	}