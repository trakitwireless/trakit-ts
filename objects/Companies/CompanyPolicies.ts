
	/**
	 * The password and session lifetime policies for this Company.
	 */
	export class CompanyPolicies extends Component implements IIdUlong, IAmCompany {
		/**
		 * Unique identifier of the Company.
		 * {@link Company.id}
		 */
		id: ulong = NaN;
		/**
		 * The unique identifier of this company's parent organization.
		 * {@link Company.id}
		 */
		parent: ulong = NaN;
		/**
		 * The session lifetime policy.
		 */
		sessionPolicy: SessionPolicy;
		/**
		 * The password complexity and expiry policy.
		 */
		passwordPolicy: PasswordPolicy;

		// IRequestable
		/**
		 * The {@link id} is the key.
		 */
public getKey(): string { return this.id.toString(); }
	}