
	/**
	 * The password and session lifetime policies for this Company.
	 */
	export class CompanyPolicies extends Component implements IIdUlong, IAmCompany {
		/**
		 * Unique identifier of the Company.
		 * {@link Company.id}
		 */
		public id: ulong = NaN;
		/**
		 * The unique identifier of this company's parent organization.
		 * {@link Company.id}
		 */
		public parent: ulong = NaN;
		/**
		 * The session lifetime policy.
		 */
		public sessionPolicy: SessionPolicy;
		/**
		 * The password complexity and expiry policy.
		 */
		public passwordPolicy: PasswordPolicy;

		// IRequestable
		/**
		 * The <see cref="id"/> is the key.
		 */
public getKey(): string { return this.id.toString(); }
	}