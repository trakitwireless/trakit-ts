﻿
	/// <summary>
	/// The password complexity and expiry policy.
	/// </summary>
	export class PasswordPolicy {
		/// <summary>
		/// The minimum number of characters required.
		/// </summary>
		public minimumLength: byte = NaN;
		/// <summary>
		/// Do passwords require alphabetical characters.
		/// </summary>
		public includeLetters: boolean = false;
		/// <summary>
		/// Do passwords require numeric characters.
		/// </summary>
		public includeNumbers: boolean = false;
		/// <summary>
		/// Do passwords require upper-case and lower-case letters.
		/// </summary>
		public includeUpperLower: boolean = false;
		/// <summary>
		/// Do passwords require non-alphanumeric characters.
		/// </summary>
		public includeSpecial: boolean = false;
		/// <summary>
		/// Defines how passwords expire.
		/// </summary>
		public expireMode: PasswordExpiryMode;
		/// <summary>
		/// The threshold for expiry.
		/// </summary>
		public expireThreshold: byte = NaN;  // days
	}