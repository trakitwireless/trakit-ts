
	/**
	 * Seldom changing details about a person.
	 */
	export class PersonGeneral extends AssetGeneral {
		/**
		 * A reference to their Company's Contact information.
		 * {@link Contact.id}
		 */
		contact: ulong = NaN;
	}