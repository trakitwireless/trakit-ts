

	/**
	 * Similar to the {@link UserGeneral} object, but instead of the {@link contact} being an identifier,
	 * it is a {@link Contact} object.
	 */
	export class SelfUserGeneral extends UserGeneral {
		/**
		 * Associated contact information for this user.
		 */
		new public contact: Contact;
	}