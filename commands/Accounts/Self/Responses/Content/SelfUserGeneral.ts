

	/// <summary>
	/// Similar to the <see cref="UserGeneral"/> object, but instead of the <see cref="contact"/> being an identifier,
	/// it is a <see cref="Contact"/> object.
	/// </summary>
	export class SelfUserGeneral extends UserGeneral {
		/// <summary>
		/// Associated contact information for this user.
		/// </summary>
		new public contact: Contact;
	}