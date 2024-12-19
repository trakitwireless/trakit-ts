
	/// <summary>
	/// Seldom changing details about a person.
	/// </summary>
	export class PersonGeneral extends AssetGeneral {
		/// <summary>
		/// A reference to their Company's Contact information.
		/// </summary>
		/// <seealso cref="Contact.id" />
		public contact: ulong = NaN;
	}