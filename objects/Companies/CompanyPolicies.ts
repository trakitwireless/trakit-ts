
	/// <summary>
	/// The password and session lifetime policies for this Company.
	/// </summary>
	export class CompanyPolicies extends Component implements IIdUlong, IAmCompany {
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
		/// The session lifetime policy.
		/// </summary>
		public sessionPolicy: SessionPolicy;
		/// <summary>
		/// The password complexity and expiry policy.
		/// </summary>
		public passwordPolicy: PasswordPolicy;

		// IRequestable
		/// <summary>
		/// The <see cref="id"/> is the key.
		/// </summary>
		/// <returns></returns>
		public getKey(): string { return this.id.toString(); }
	}