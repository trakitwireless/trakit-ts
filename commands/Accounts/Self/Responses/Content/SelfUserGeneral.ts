

	/**
	 * Similar to the <see cref="UserGeneral"/> object, but instead of the <see cref="contact"/> being an identifier,
	 * it is a <see cref="Contact"/> object.
	 */
	export class SelfUserGeneral extends UserGeneral {
		/**
		 * Associated contact information for this user.
		 */
		new public contact: Contact;
	}