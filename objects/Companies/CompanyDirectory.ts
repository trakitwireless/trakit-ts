

	/// <summary>
	/// The list of Contacts from this and other companies broken down by contact role.
	/// </summary>
	/// <override skip="true" />
	export class CompanyDirectory extends Component implements IIdUlong, IAmCompany {
		/// <summary>
		/// Unique identifier of the Company.
		/// </summary>
		/// <seealso cref="Company.id" />
		public id: ulong = NaN;
		/// <summary>
		/// The unique identifier of this company's parent organization.
		/// </summary>
		/// <seealso cref="Company.id" />
		public parent: ulong = NaN;
		/// <summary>
		/// The list of Contacts from this and other companies broken down by contact role.
		/// </summary>
		/// <override>
		/// <values>
		/// <values>
		/// <seealso cref="Contact.id" />
		/// </values>
		/// </values>
		/// </override>
		public directory: Map<string, ulong[]>;

		// IRequestable
		/// <summary>
		/// The <see cref="id"/> is the key.
		/// </summary>
		/// <returns></returns>
		public getKey(): string { return this.id.toString(); }
	}